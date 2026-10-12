import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api, formatUSD } from '../lib/api.js';
import { useCart } from '../CartContext.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.product(id)
      .then((p) => { setProduct(p); setQty(p.minOrderQty); })
      .catch((e) => setError(e.message));
  }, [id]);

  if (error) return <p className="error">{error} <Link to="/">Back to products</Link></p>;
  if (!product) return <p className="muted">Loading...</p>;

  const handleAdd = () => {
    add(product, Number(qty));
    navigate('/cart');
  };

  return (
    <article className="detail">
      <Link to="/" className="muted">← All products</Link>
      <div className="detail-grid">
        <div className={`thumb large cat-${product.category}`}>{product.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}</div>
        <div>
          <h1>{product.name}</h1>
          <p className="price big">{formatUSD(product.price)} <span className="muted">/ {product.unit}</span></p>
          <p>{product.description}</p>
          <dl className="specs">
            <dt>Minimum order</dt><dd>{product.minOrderQty} {product.unit}</dd>
            <dt>Lead time</dt><dd>{product.leadTimeDays} days</dd>
            <dt>Supplier</dt><dd>{product.supplier?.name}, {product.supplier?.city}, {product.supplier?.country}</dd>
            <dt>Verification</dt><dd>{product.supplier?.verified ? 'Verified (demo label, not a real check)' : 'Not verified'}</dd>
          </dl>
          <div className="buy-row">
            <label>
              Quantity ({product.unit})
              <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} />
            </label>
            <button onClick={handleAdd}>Add to cart</button>
          </div>
          <p className="muted small">Line total: {formatUSD(product.price * (Number(qty) || 0))}</p>
        </div>
      </div>
    </article>
  );
}
