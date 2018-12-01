import React from 'react';
import { connect } from 'react-redux';
import { startEditItem } from '../actions/items';
import ItemForm from './ItemForm';

const EditItemPage = (props) => (
  <div>
    {props.uid === props.item.sellerId ? (
      <ItemForm
      item={props.item}
      onSubmit={(item) => {
        props.dispatch(startEditItem(props.item.id, item));
        props.history.push('/');
      }}
    />
    ) : (
      props.history.push('/')
    )}

  </div>
);

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find((item) => item.id === props.match.params.id),
    uid: state.auth.uid
  }
}

export default connect(mapStateToProps)(EditItemPage);
