import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render() {
    const { addFish } = this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={addFish} />
      </div>
    );
  }
}

export default Inventory;
