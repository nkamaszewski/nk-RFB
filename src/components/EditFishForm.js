import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = e => {
    const { index, updateFish } = this.props;
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    updateFish(index, updatedFish);
  };
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} value={name} type="text" placeholder="Name" />
        <input name="price" onChange={this.handleChange} value={price} type="text" placeholder="Price" />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} placeholder="Desc" />
        <input name="image" onChange={this.handleChange} value={image} type="text" placeholder="Image" />
      </div>
    );
  }
}

export default EditFishForm;
