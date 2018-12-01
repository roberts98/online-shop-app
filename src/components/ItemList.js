import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/items';
import ItemListOne from './ItemListOne';

const ItemList = (props) => (
  <div>
    {props.items.map((item) => (
      <ItemListOne
        key={item.name}
        {...item}
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