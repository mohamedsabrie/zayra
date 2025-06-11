import Image from "next/image";
import ProductDetails from "./_components/ProductDetails";
import { getProduct, getProducts } from "@/lib/api/products";
import { createMetadata } from "@/lib/utils/createMetadata";
import { Metadata } from "next";
import { ProductJsonLd } from "@/components/JsonLd";

// Cache configuration
export const revalidate = 3600; // 1 hour
export const dynamicParams = true;

// Static paths generation
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: String(product.id),
  }));
}

// Main component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  const { image, title } = product;

  return (
    <>
      <ProductJsonLd
        name={title}
        description={product.description}
        images={[image]}
        price={product.price}
        ratingValue={product.rating?.rate}
        reviewCount={product.rating?.count}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <div className="flex justify-center">
          <div className="flex justify-center md:items-start aspect-[2/3] relative w-full max-w-[400px]">
            <Image
              width={400}
              height={600}
              src={image}
              alt={title}
              className="object-contain"
              priority={true}
            />
          </div>
        </div>
        <ProductDetails productData={product} />
      </div>
    </>
  );
}

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  return createMetadata({
    title: product.title,
    description: product.description,
    images: [product.image],
  });
}
