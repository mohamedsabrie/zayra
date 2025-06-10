
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Products from "./_components/Products";
export const dynamic = "force-static";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products", { cache: 'force-cache' });
  const products = await data.json();
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
        <Products productsData={products} />
      </div>
  );
}

