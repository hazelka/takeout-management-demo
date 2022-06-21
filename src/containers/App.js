import React from 'react';
import Info from './Info';
import Update from '../components/Update';
import './App.css';
import Navigation from '../components/Navigation';
import { sample_orders, sample_messages } from '../sample';

// const ws = new WebSocket('wss://pacific-reef-95638.herokuapp.com/live-update');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      messages: [],
      route: 'orders',
      newOrder: true,
      newMessage: false
    }
  }

  componentDidMount() {
    this.fetchInfo();
    // this.handleWebsocket();
  }

  fetchInfo = () => {
    this.handleOrders(sample_orders);
    this.setState({ messages: sample_messages });

    /**
     * The code below is for actual production
     * For demonstration purposes of the frontend, sample data is replaced
     * with actual data fetch from the cloud database
     */
    // fetch('https://pacific-reef-95638.herokuapp.com/orders')
    //   .then(response => response.json())
    //   .then(orders => this.handleOrders(orders))
    //   .catch(error => console.log('Unable to fetch order, %s', error));

    // fetch('https://pacific-reef-95638.herokuapp.com/messages')
    //   .then(response => response.json())
    //   .then(messages => this.setState({ messages }))
    //   .catch(error => console.log('Unable to fetch messages, %s', error));
  }

  handleOrders = (orders) => {
    this.addStatToOrders(orders);

    // To demonstrate the new order feature only!
    orders[orders.length - 1].newItem = true;
    // Remove the above code in production!
    
    this.setState({ orders });
  }


  /**
   * The code below is for actual production
   * For demonstration purposes of the frontend, sample data is replaced
   * with actual data fetch from the cloud database
   */
  // handleWebsocket = () => {
  //   ws.onopen = () => ws.send(JSON.stringify({ type:  'manager' }));
  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
 
  //     switch (data.type) {
  //       case 'order':
  //         this.addNewOrder(data);
  //         break;
  //       case 'message':
  //         this.addNewMessage(data);
  //         break;
  //       default:
  //         console.log('Something is wrong %s', event.data);
  //     }
  //   };
  // }

  addNewOrder = (order) => {
    const orders = JSON.parse(JSON.stringify(this.state.orders));

    this.addSubtotalToItems(order.items);
    this.addTotalToOrder(order);
    delete order.type;
    order.newItem = true;
    orders.push(order);

    this.setState({
      orders,
      newOrder: true
    });
  }

  addNewMessage = (message) => {
    const messages = JSON.parse(JSON.stringify(this.state.messages));
    delete message.type;
    message.newItem = true;
    messages.push(message);

    this.setState({
      messages,
      newMessage: true
    });
  }

  addStatToOrders = (orders) => {
    orders.forEach((order, i) => {
      this.addSubtotalToItems(order.items);
      this.addTotalToOrder(order);
    });
  }

  addSubtotalToItems = (items) => {
    items.forEach((item) => {
      item.subtotal = item.quantity * item.price;
    });
  }

  addTotalToOrder = (order) => {
    order.total = order.items.reduce((acc, item) => acc + item.subtotal, 0);
  }

  handleRouteChange = (route) => {
    this.setState({ route });
  }

  handleVisitedNewItem = (type, i) => {
    const items = JSON.parse(JSON.stringify(this.state[type]));
    items[i].newItem = false;
    this.setState({
      [type]: items
    })
  }

  closeNewOrderAlert = () => {
    this.setState({
      newOrder: false
    })
  }

  closeNewMessageAlert = () => {
    this.setState({
      newMessage: false
    })
  }

  updateStatus = (type, id, status) => {

    /**
     * The code below is for actual production
     * For demonstration purposes of the frontend, sample data is replaced
     * with actual data fetch from the cloud database
     */
    // fetch(`https://pacific-reef-95638.herokuapp.com/update`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ type, id, status })
    // }).then(response => response.text())
    //   .then(response => {
    //     if (response === 'updated') {
    //       const updatedValues = JSON.parse(JSON.stringify(this.state[type]));
    //       const i = updatedValues.findIndex(value => value.id === id);
    //       updatedValues[i].status = status;
    //       this.setState({ [type]: updatedValues });
    //     } else {
    //       console.log(response);
    //     }
    //   })
    //   .catch(error => console.log('Error updating status', error));

  }

  render() {
    return (
      <div id="App">
        <Navigation 
          handleRouteChange={this.handleRouteChange}
        />
        <Info
          key={this.state.route} 
          type={this.state.route}
          items={this.state[this.state.route]}
          handleVisitedNewItem={this.handleVisitedNewItem}
          updateStatus={this.updateStatus}
        />
        <Update 
          newOrder={this.state.newOrder}
          newMessage={this.state.newMessage}
          closeNewOrderAlert={this.closeNewOrderAlert}
          closeNewMessageAlert={this.closeNewMessageAlert}
        />
      </div>
    );
  }
}

export default App;
