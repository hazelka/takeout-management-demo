import './Item.css';

const Item = ({ 
  type, 
  id, 
  name, 
  received,
  newItem, 
  handleDetailDisplayChange,
  handleVisitedNewItem
}) => {
  const date = received.substr(0, 10);
  const time = received.substr(11, 8);
  const typeFormat = type[0].toUpperCase() + type.slice(1);
  const handleOnClick = () => {
    handleDetailDisplayChange();
    if (newItem) handleVisitedNewItem();
  };

  return (
    <div className={`item ${newItem ? 'new' : ''}`} onClick={handleOnClick}>
      <div className='info-type'>{`${typeFormat} - ${id}`}</div>
      <div className='info-container'>
        <span className='info-name'>{name}</span>
        <span className={`new-icon ${newItem ? '' : 'hide'}`}>New</span>
        <div className='info-date'>
        {`${date} ${time}`}
        </div>
      </div>
    </div>
  );
}

export default Item;