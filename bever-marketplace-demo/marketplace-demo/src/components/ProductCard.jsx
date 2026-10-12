import { Link } from 'react-router-dom';
import { formatUSD } from '../lib/api.js';

export default function ProductCard({ product }) {
  const initials = product.name.split(' ').slice(0, 2).map((w) => w[0]).join('');
  return (
    <Link to={`/products/${product.id}`} className="card">
      <div className={`thumb cat-${product.category}`}>{initials}</div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="muted">
          {product.supplier?.name} · {product.supplier?.country}
          {product.supplier?.verified && <span className="badge">Verified*</span>}
        </p>
        <p className="price">
          {formatUSD(product.price)} <span className="muted">/ {product.unit}</span>
        </p>
        <p className="muted small">MOQ: {product.minOrderQty} {product.unit}</p>
      </div>
    </Link>
  );
}
