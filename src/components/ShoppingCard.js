import React from 'react';
import { connect } from 'react-redux';
import getItems from '../selectors/shoppingCard';
import ItemListOne from './ItemListOne';

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
    items: getItems(state.items)
  }
};

export default connect(mapStateToProps)(ShoppingCard);