'use client';

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="pf-c-page__main-section">
        <div className="pf-c-empty-state">
          <p>No products available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pf-c-page__main-section">
      <div className="pf-l-gallery pf-m-gutter">
        {products.map((product) => (
          <div key={product.itemId || product.name} className="pf-l-gallery__item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
