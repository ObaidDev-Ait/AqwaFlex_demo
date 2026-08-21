import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetailClient";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!products.some((product) => product.slug === slug)) {
    notFound();
  }

  return <ProductDetail slug={slug} />;
}
