import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import NotFoundPage from '../NotFoundPage';
import { startBuyItem, startIncViews } from '../../actions/items';

class ShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasInc: false,
      isOpen: false
    }
  }
  incViews = () => {
    if (!this.state.wasInc && this.props.item) {
      this.props.dispatch(startIncViews(this.props.item));
      this.setState({ wasInc: true });
    }
  }
  componentWillMount() {
    this.incViews();
  }
  closeLightbox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    return (
      <div className="container">
        <div className="item-show bg-light mt-5">
          {this.props.item ? (
            <div className="row m-0">
              <div className="col-md-7">
                <img src={this.props.item.photo} onClick={this.closeLightbox} className="img-fluid img-modal p-3" />
                {this.state.isOpen && (
                  <Lightbox
                    mainSrc={this.props.item.photo}
                    onCloseRequest={this.closeLightbox}
                  />
                )}
              </div>
              <div className="col-md-5 pl-5 p-md-2">
                {!this.props.uid || this.props.item.isBought || this.props.item.sellerId === this.props.uid ? (
                  <div className="mt-3">
                    <Link to={`/items/${this.props.item.id}/edit`}>
                      <button className="btn btn-warning d-flex">Edit</button>
                    </Link>
                  </div>
                ) : (
                    <button
                      className="btn btn-primary my-3 btn-buy"
                      onClick={() => {
                        this.props.dispatch(startBuyItem(this.props.item.id));
                        this.props.history.push('/dashboard/orders/bought');
                      }}
                    >
                      Buy
                    </button>
                  )}
                <h5 className="text-dark mt-3 m-0">{this.props.item.name}</h5>
                <p className="item-seller text-muted m-0">{this.props.item.sellerId}</p>
                <h2 className="text-info m-0 mt-sm-3">{this.props.item.price} PLN</h2>
                <h5 className="text-danger m-0 item-price">{this.props.item.typeOfSale === 'buyNow' ? 'Buy Now' : 'Auction'}</h5>
              </div>
            </div>
          ) : (
              <NotFoundPage />
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => item.id === props.match.params.id),
    uid: state.auth.uid
  }
};

export default connect(mapStateToProps)(ShowItem);