import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
import { buyItem } from '../actions/items';

const ShowItem = (props) => (
  <div>
    {props.item ? (
      <div>
        <Link to={`/items/${props.item.id}/edit`}><h2>{props.item.name}</h2></Link>
        <button
          onClick={() => {
            props.dispatch(buyItem(props.item.id));
            props.history.push('/');
          }}>
          Buy
      </button>
      </div>
    ) : (
        <NotFoundPage />
      )}
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => item.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(ShowItem);