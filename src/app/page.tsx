import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Products from "./_components/Products";
import { getProducts } from "@/lib/api/products";

interface PageProps {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const currSearchParams = await searchParams;
  const products = await getProducts(currSearchParams.category);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl sm:text-[42px] mb-4">Fashion</h1>
      <Breadcrumbs
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Fashion",
            href: "/",
          },
        ]}
      />
      <Products productsData={products} searchParams={currSearchParams} />
    </div>
  );
}
