import React, { useState } from 'react';
import './Detail.css';

const MessageDetail = ({ message, updateStatus }) => {
  const [status, setStatus] = useState(message.status);

  const date = message.received.substr(0, 10);
  const time = message.received.substr(11, 8);

  const handleUpdateStatus = (status) => {
    if (status === message.status) return;
    updateStatus('messages', message.id, status)
  };

  return (
    <div>
      <h2 className='detail-category'>MESSAGE DETAIL</h2>
      <div>
        <span className='property'>Message ID</span>
        <span>{message.id}</span>
      </div>
      <div>
        <span className='property'>Customer Name</span>
        <span>{message.name}</span>
      </div>
      <div>
        <span className='property'>Phone</span>
        <span>{message.phone}</span>
      </div>
      <div>
        <span className='property'>Email</span>
        <span>{message.email}</span>
      </div>
      <div>
        <span className='property'>Received</span>
        <span>{date + ' ' + time}</span>
      </div>
      <div>
        <span className='property'>Status</span>
        <span>{message.status}</span>
        <div className='status-selection'>
          <input 
            type="radio" value="Replied" name="status"
            defaultChecked={message.status === 'Replied'} 
            onChange={() => setStatus('Replied')}
          />
            Replied
          <input 
            type="radio" value="Pending" name="status"
            defaultChecked={message.status === 'Pending'} 
            onChange={() => setStatus('Pending')}
          />
            Pending
          <input 
            type="radio" value="Cancelled" name="status"
            defaultChecked={message.status === 'Ignore'} 
            onChange={() => setStatus('Ignore')}
          />
            Ignore
          <button 
            id='update-status-button'
            onClick={() => handleUpdateStatus(status)}
          >
            Update Status
          </button>
        </div>
      </div>
      <div className='message'>
        <span className='property'>Message</span>
        <div className='message-detail'>{message.message}</div>
      </div>
    </div>
  );
}

export default MessageDetail;