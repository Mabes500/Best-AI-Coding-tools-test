import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, formatUSD } from '../lib/api.js';

export default function OrderConfirmation() {
  const { reference } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.order(reference).then(setOrder).catch((e) => setError(e.message));
  }, [reference]);

  if (error) return <p className="error">{error} <Link to="/">Back to products</Link></p>;
  if (!order) return <p className="muted">Loading order...</p>;

  return (
    <section>
      <h1>Demo order placed</h1>
      <p>Reference: <strong>{order.reference}</strong> · Trade terms: {order.tradeTerms}</p>
      <ul>
        {order.items.map((i) => (
          <li key={i.productId}>{i.quantity} {i.unit} × {i.name} = {formatUSD(i.lineTotal)}</li>
        ))}
      </ul>
      <p><strong>Total: {formatUSD(order.total)}</strong></p>
      <p className="notice">This order exists only in the demo server's memory and is not sent to any supplier.</p>
      <Link to="/">Continue browsing</Link>
    </section>
  );
}
