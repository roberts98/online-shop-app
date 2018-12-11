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
      stateOfItem: props.item ? props.item.stateOfItem : 'new',
      typeOfSale: props.item ? props.item.typeOfSale : 'buyNow',
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
  stateOfItemChange = (e) => {
    const stateOfItem = e.target.value;
    this.setState(() => ({ stateOfItem }));
  };
  typeOfSaleChange = (e) => {
    const typeOfSale = e.target.value;
    this.setState(() => ({ typeOfSale }));
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
        location: this.state.location,
        typeOfSale: this.state.typeOfSale,
        stateOfItem: this.state.stateOfItem
      });
    };
  };
  render() {
    return (
      <div className="mt-2">
        {this.state.error && <div className="alert alert-danger" role="alert">{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Item name"
              onChange={this.nameChange}
              value={this.state.name}
              autoFocus
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.descriptionChange}
              value={this.state.description}
              rows="8"
            >
            </textarea>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <div className="input-group mb-0">
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={this.priceChange}
                  value={this.state.price}
                />
                <div className="input-group-append">
                  <div className="input-group-text">PLN</div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-3 pt-3 mb-0">
              <select
                className="form-control"
                onChange={this.categoryChange}
                value={this.state.category}
              >
                <option>clothes</option>
                <option>electronics</option>
                <option>others</option>
              </select>
            </div>
            <div className="form-group col-md-2 pt-3 mb-0">
              <select
                className="form-control"
                onChange={this.stateOfItemChange}
                value={this.state.stateOfItem}
              >
                <option>new</option>
                <option>used</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <div className="input-group mb-0">
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={this.locationChange}
                  value={this.state.location}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="photo"
              placeholder="Image URL"
              onChange={this.photoChange}
              value={this.state.photo}
            />
          </div>
          <div className="form-group m-0 col-md-2">
            <select
              className="form-control"
              onChange={this.typeOfSaleChange}
              value={this.state.typeOfSale}
            >
              <option value="buyNow">buy now</option>
              <option>auction</option>
            </select>
          </div>
          <button className="btn btn-primary btn-lg mt-3 float-right">Save Item</button>
        </form>
      </div>
    );
  }
};