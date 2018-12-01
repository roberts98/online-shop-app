import React from 'react';
import moment from 'moment';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.item ? props.item.name : '',
      description: props.item ? props.item.description : '',
      price: props.item ? props.item.price : '',
      createdAt: moment().valueOf(),
      location: props.item ? props.item.location : '',
      isBought: props.item ? props.item.isBought : false,
      error: ''
    }
  };
  nameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  descriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  priceChange = (e) => {
    const price = e.target.value;
    this.setState(() => ({ price }));
  };
  locationChange = (e) => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  };
  boughtChange = () => {
    this.setState(() => ({ isBought: true }));
    this.props.onBuy({
      isBought: this.state.isBought
    });
  } 
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.description || !this.state.price || !this.state.location) {
      this.setState(() => ({ error: 'Please provide all informations'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        createdAt: this.state.createdAt,
        location: this.state.location
      });
    };
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Item"
            onChange={this.nameChange}
            value={this.state.name}
            autoFocus
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.descriptionChange}
            value={this.state.description}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={this.priceChange}
            value={this.state.price}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.locationChange}
            value={this.state.location}
          />
          <button>Save Item</button>
        </form>
        <button onClick={this.boughtChange}>Buy Item</button>
      </div>
    );
  }
};