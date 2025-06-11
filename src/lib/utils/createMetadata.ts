import { Metadata } from "next";
export interface MetadataProps {
  title: string;
  description: string;
  images?: string[];
}

export function createMetadata({
  title,
  description,
  images = [],
}: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: images.map((image) => ({ url: image })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"), // Replace this with your production URL in deployment
  };
}
