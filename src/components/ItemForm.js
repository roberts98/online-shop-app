import React from 'react';
import moment from 'moment';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.item ? props.item.name : '',
      description: props.item ? props.item.description : '',
      price: props.item ? props.item.price.toString() : '',
      createdAt: props.item ? moment(props.item.createdAt) : moment(),
      photo: props.item ? props.item.photo : '',
      category: props.item ? props.item.category : 'clothes',
      location: props.item ? props.item.location : '',
      isBought: props.item ? props.item.isBought : false,
      error: ''
    }
  };
  nameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  categoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };
  descriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  priceChange = (e) => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  photoChange = (e) => {
    const photo = e.target.value;
    this.setState(() => ({ photo }));
  };
  locationChange = (e) => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.description || !this.state.price || !this.state.location) {
      this.setState(() => ({ error: 'Please provide all informations' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        description: this.state.description,
        price: parseFloat(this.state.price, 10),
        category: this.state.category,
        createdAt: this.state.createdAt.valueOf(),
        photo: this.state.photo || 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
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
          <select
            onChange={this.categoryChange}
            value={this.state.category}
          >
            <option>clothes</option>
            <option>electronics</option>
            <option>others</option>
          </select>
          <input
            type="text"
            name="photo"
            placeholder="Image URL"
            onChange={this.photoChange}
            value={this.state.photo}
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
      </div>
    );
  }
};