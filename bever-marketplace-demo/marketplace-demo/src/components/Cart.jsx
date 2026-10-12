import { Link } from 'react-router-dom';
import { useCart } from '../CartContext.jsx';
import { lineTotal } from '../lib/cart.js';
import { formatUSD } from '../lib/api.js';

export default function Cart() {
  const { cart, update, remove, total } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty. <Link to="/">Browse products</Link></p>;
  }

  return (
    <section>
      <h1>Cart</h1>
      <table className="cart-table">
        <thead>
          <tr><th>Product</th><th>Unit price</th><th>Quantity</th><th>Line total</th><th /></tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.productId}>
              <td>
                <Link to={`/products/${item.productId}`}>{item.name}</Link>
                <div className="muted small">MOQ: {item.minOrderQty} {item.unit}</div>
              </td>
              <td>{formatUSD(item.price)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => update(item.productId, e.target.value)}
                  aria-label={`Quantity for ${item.name}`}
                />
              </td>
              <td>{formatUSD(lineTotal(item))}</td>
              <td><button className="link" onClick={() => remove(item.productId)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <strong>Total: {formatUSD(total)}</strong>
        <Link to="/checkout" className="button">Proceed to checkout</Link>
      </div>
    </section>
  );
}
