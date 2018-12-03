import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
import { startBuyItem } from '../actions/items';

const ShowItem = (props) => (
  <div>
    {props.item ? (
      <div>
        <Link to={`/items/${props.item.id}/edit`}><h2>{props.item.name}</h2></Link>
        <p>{props.item.description}</p>
        {!props.uid || props.item.isBought || props.item.sellerId === props.uid ? (
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

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => item.id === props.match.params.id),
    uid: state.auth.uid 
  }
};

export default connect(mapStateToProps)(ShowItem);