import React from 'react';
import { connect } from 'react-redux';
import ItemListSingle from './ItemListSingle';

const MySellItems = (props) => (
  <div>
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
    items: state.items.filter((item) => item.sellerId === state.auth.uid)
  }
};

export default connect(mapStateToProps)(MySellItems);