import { getProducts } from '@/lib/catalog';
import ProductGrid from '@/components/ProductGrid';

export default async function HomePage() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];

  try {
    products = await getProducts();
  } catch {
    // API may not be available — render empty state
  }

  return <ProductGrid products={products} />;
}
