import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

function formatCurrency(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export default function ProductCard({ product }: ProductCardProps) {
  const quantity = product.availability?.quantity ?? 0;
  const isLowStock = quantity > 0 && quantity < 15;
  const isOutOfStock = quantity === 0;

  return (
    <div className="pf-c-card pf-m-hoverable pf-m-compact">
      <div className="pf-c-card__head">
        <Image
          className="img-responsive img-circle"
          src={`/imgs/${product.name}.jpg`}
          alt={product.name}
          width={200}
          height={100}
          style={{ height: '100px', width: 'auto' }}
        />
      </div>
      <div className="pf-c-card__header pf-c-title pf-m-md">
        <p>{product.name}</p>
        <div className="pf-c-content">
          <small>Provided by Red Hat</small>
        </div>
      </div>
      <div className="pf-c-card__body">{product.description}</div>
      <div className="pf-c-card__footer">
        <span>{formatCurrency(product.price)}</span>
        {!isOutOfStock && product.availability && (
          <div style={{ float: 'right' }}>
            <span
              className={`pf-c-label pf-m-compact label-${isLowStock ? 'warning' : 'primary'}`}
            >
              {quantity} left!
            </span>
            {product.availability.link && (
              <a target="_blank" rel="noopener noreferrer" href={product.availability.link}>
                &nbsp;
              </a>
            )}
          </div>
        )}
        {isOutOfStock && (
          <div style={{ float: 'right' }}>
            <span className="fa fa-warning fa-lg" />
            &nbsp;Not in Stock
          </div>
        )}
      </div>
    </div>
  );
}
