import React, { useState } from 'react';
import Order from './Order';
import './Detail.css';

const OrderDetail = ({ order, updateStatus }) => {
  const [status, setStatus] = useState(order.status);

  const date = order.received.substr(0, 10);
  const time = order.received.substr(11, 8);

  const handleUpdateStatus = (status) => {
    if (status === order.status) return;
    updateStatus('orders', order.id, status)
  };

  return (
    <div>
      <h2 className='detail-category'>ORDER SUMMARY</h2>
      <div>
        <span className='property'>Order ID</span>
        <span>{order.id}</span>
      </div>
      <div>
        <span className='property'>Customer Name</span>
        <span>{order.fname + ' ' + order.lname}</span>
      </div>
      <div>
        <span className='property'>Phone</span>
        <span>{order.phone}</span>
      </div>
      <div>
        <span className='property'>Email</span>
        <span>{order.email}</span>
      </div>
      <div>
        <span className='property'>Order Total</span>
        <span>{'$' + order.total.toFixed(2)}</span>
      </div>
      <div>
        <span className='property'>Order Received</span>
        <span>{date + ' ' + time}</span>
      </div>
      <div>
        <span className='property'>Status</span>
        <span>{order.status}</span>
        <div className='status-selection'>
          <input 
            type="radio" value="Completed" name="status"
            defaultChecked={order.status === 'Completed'} 
            onChange={() => setStatus('Completed')}
          />
            Completed
          <input 
            type="radio" value="Pending" name="status"
            defaultChecked={order.status === 'Pending'} 
            onChange={() => setStatus('Pending')}
          />
            Pending
          <input 
            type="radio" value="Cancelled" name="status"
            defaultChecked={order.status === 'Cancelled'} 
            onChange={() => setStatus('Cancelled')}
          />
            Cancelled
          <button 
            id='update-status-button'
            onClick={() => handleUpdateStatus(status)}
          >
            Update Status
          </button>
        </div>
      </div>
      <Order items={order.items} />
    </div>
  );
}

export default OrderDetail;