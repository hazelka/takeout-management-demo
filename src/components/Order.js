import './Order.css';

const Order = ({ items }) => {
  return (
    <table className='order'>
      <thead>
        <tr>
          <th className="order-item-name">Name</th>
          <th className="order-item-other">Quantity</th>
          <th className="order-item-other">Price</th>
          <th className="order-item-other">Total</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item) => (
            <tr key={item.id}>
              <td className="order-item-name">{item.name}</td>
              <td className="order-item-other">{item.quantity}</td>
              <td className="order-item-other">{`$${item.price.toFixed(2)}`}</td>
              <td className="order-item-other">{`$${item.subtotal.toFixed(2)}`}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Order;