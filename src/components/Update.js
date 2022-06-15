import './Update.css';

const Update = ({ 
  newOrder, 
  newMessage, 
  closeNewOrderAlert, 
  closeNewMessageAlert 
}) => {
  return (
    <div className="update-container">
      <div className={`update ${newOrder ? '' : 'hide'}`} wobble="1">
        <div className='close-update'>
          <span onClick={closeNewOrderAlert}>X</span>
        </div>
        New order received!
      </div>
      <div className={`update ${newMessage ? '' : 'hide'}`} wobble="1">
        <div className='close-update'>
          <span onClick={closeNewMessageAlert}>X</span>
        </div>
        New message received!
      </div>
    </div>
  );
}

export default Update;