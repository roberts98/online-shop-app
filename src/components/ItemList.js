import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/items';
import ItemListOne from './ItemListOne';
import { buyItem } from '../actions/items';

const ItemList = (props) => (
  <div>
    {props.items.map((item) => (
      <ItemListOne
        key={item.name}
        {...item}
        onClick={(item) => {
          props.dispatch(buyItem(item.id));
          props.history.push('/');
        }}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: getItems(state.items, state.filters)
  }
};

export default connect(mapStateToProps)(ItemList);