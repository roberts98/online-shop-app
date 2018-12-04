import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
import { startBuyItem, startIncViews } from '../actions/items';

class ShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasInc: false
    }
  }
  incViews = () => {
    if (!this.state.wasInc) {
      this.props.dispatch(startIncViews(this.props.item));
      this.setState({ wasInc: true });
    }
  }
  componentWillMount() {
    this.incViews();
  }
  render() {
    return (
      <div>
        {this.props.item ? (
          <div>
            <Link to={`/items/${this.props.item.id}/edit`}><h2>{this.props.item.name}</h2></Link>
            <p>{this.props.item.views}</p>
            {!this.props.uid || this.props.item.isBought || this.props.item.sellerId === this.props.uid ? (
              <p>You cannot buy this item</p>
            ) : (
                <button
                  onClick={() => {
                    props.dispatch(startBuyItem(props.item.id));
                    props.history.push('/cart');
                  }}
                >
                  Buy
              </button>
              )}
          </div>
        ) : (
            <NotFoundPage />
          )}
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