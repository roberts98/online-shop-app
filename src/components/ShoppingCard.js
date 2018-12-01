import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/shoppingCard';
import ItemListOne from './ItemListOne';
import { startSetItems } from '../actions/items';

class ShoppingCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <ItemListOne
            key={item.name}
            {...item}
          />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: getItems(state.items, state.auth.uid)
  }
};

export default connect(mapStateToProps)(ShoppingCard);