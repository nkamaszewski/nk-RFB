import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if (fish.status !== 'available') {
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>;
    }
    return (
      <li key={key}>
        {count} lbs {fish.name} {formatPrice(fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order),
      total = orderIds.reduce((prevTotal, key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        if (isAvailable) {
          return prevTotal + count * fish.price;
        }
        return prevTotal;
      }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
