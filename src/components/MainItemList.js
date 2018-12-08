import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/items';
import ItemListSingle from './ItemListSingle';
import ItemListFilters from './ItemListFilters';

const ItemList = (props) => (
  <div className="container">
    <ItemListFilters
      itemsNumber={props.items.length}
    />
    {props.items.map((item) => (
      <ItemListSingle
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