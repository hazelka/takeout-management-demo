import './Navigation.css';

function Navigation({ handleRouteChange }) {
  return (  
    <nav>
      <h1>
        <div>Takeout</div>
        <div>Management</div>
        <div>System</div>
      </h1>
      <ul>
        <li onClick={() => handleRouteChange('orders')}>
          <i className="fa fa-shopping-cart"></i>
          Orders
        </li>
        <li onClick={() => handleRouteChange('messages')}>
          <i className="fa fa fa-envelope"></i>
          Messages
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;