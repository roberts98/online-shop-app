import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/shoppingCart';
import ItemListOne from './ItemListOne';

export const ShoppingCart = (props) => (
  <div>
    {props.items.length > 0 ? (
      props.items.map((item) => (
        <ItemListOne
          key={item.name}
          {...item}
        />
      ))
    ) : (
        <p>Your shopping cart is empty!</p>
      )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    items: getItems(state.items, state.auth.uid)
  }
};

export default connect(mapStateToProps)(ShoppingCart);