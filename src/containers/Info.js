import React from 'react';
import Item from '../components/Item';
import OrderDetail from '../components/OrderDetail';
import MessageDetail from '../components/MessageDetail';
import './Info.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDisplay: 0
    }
  }

  renderItems = (items) => {
    return items.map((item, i) => {
      let name;
      if (this.props.type === 'orders') name = item.fname + ' ' + item.lname;
      if (this.props.type === 'messages') name = item.name;

      return (
        <Item
          key={item.id}
          id={item.id}
          type={this.props.type}
          name={name}
          received={item.received}
          newItem={item.newItem}
          handleDetailDisplayChange={() => this.handleDetailDisplayChange(i)}
          handleVisitedNewItem={
            () => this.props.handleVisitedNewItem(this.props.type, i)
          }
        />
      );
    });
  }

  renderDetail = () => {
    const { type, items } = this.props;

    if (!items.length) return;

    if (type === 'orders') {
      return (
        <OrderDetail
          key={items[this.state.detailDisplay].id} 
          order={items[this.state.detailDisplay]} 
          updateStatus={this.props.updateStatus}
        />
      );
    }
    
    if (type === 'messages') {
      return (
        <MessageDetail
          key={items[this.state.detailDisplay].id} 
          message={items[this.state.detailDisplay]} 
          updateStatus={this.props.updateStatus}
        />
      );
    } 
  }

  handleDetailDisplayChange = (i) => {
    this.setState({ detailDisplay: i });
  }

  render() {
    return (
      <main id="info">
        <div id="items-container">
          {this.renderItems(this.props.items)}
        </div>
        <div id="detail-container">
          {this.renderDetail()}
        </div>
      </main>
    );
  }
}

export default Info;