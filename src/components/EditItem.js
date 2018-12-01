import React from 'react';
import { connect } from 'react-redux';
import { editItem, buyItem } from '../actions/items';
import ItemForm from './ItemForm';

const EditItemPage = (props) => (
  <div>
    <ItemForm
      item={props.item}
      onSubmit={(item) => {
        props.dispatch(editItem(props.item.id, item));
        props.history.push('/');
      }}
      onBuy={() => {
        props.dispatch(buyItem(props.item.id));
        props.history.push('/');
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => item.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditItemPage);
