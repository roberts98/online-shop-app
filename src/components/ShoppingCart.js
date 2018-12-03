import React from 'react';
import { connect } from 'react-redux';
import ItemListSingle from './ItemListSingle';

export const ShoppingCart = (props) => (
  <div>
    {props.items.length > 0 ? (
      props.items.map((item) => (
        <ItemListSingle
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
  console.log(state);
  return {
    items: state.items.filter((item) => (item.isBought && item.buyerId === state.auth.uid))
  }
};

export default connect(mapStateToProps)(ShoppingCart);