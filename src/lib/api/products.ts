import { ProductType } from "@/lib/types";

const API_BASE_URL = "https://fakestoreapi.com";

export async function getProduct(id: string): Promise<ProductType> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

export async function getProducts(category?: string): Promise<ProductType[]> {
  try {
    const PRODUCTS_URL =
      !category || category === "all"
        ? `${API_BASE_URL}/products`
        : `${API_BASE_URL}/products/category/${category}`;

    const response = await fetch(PRODUCTS_URL, {
      // Cache for 1 hour - adjust this value based on your needs
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    const categories = await response.json();
    return ["all", ...categories];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
