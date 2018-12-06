import database from '../firebase/firebase';

export const incViews = (id) => ({
  type: 'INCREMENT_VIEWS',
  id
});

export const startIncViews = (item) => {
  return (dispatch) => {
    return database.ref(`/items/${item.id}`).update({ views: ++item.views }).then(() => {
      dispatch(incViews(item.id));
    });
  }
};

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      sellerId = uid,
      name = '',
      description = '',
      category = 'clothes',
      price = Number,
      createdAt = 0,
      photo = '',
      location = '',
      isBought = false,
      buyerId = '',
      views = 0
    } = itemData;
    const item = { sellerId, name, description, category, price, createdAt, photo, location, isBought, buyerId, views };
    console.log(typeof item.price);
    return database.ref(`/items`).push(item).then((ref) => {
      dispatch(addItem({
        id: ref.key,
        ...item
      }));
    });
  };
};

export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

export const startEditItem = (id, updates) => {
  return (disptach, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/items/${id}`).update(updates).then(() => {
      disptach(editItem(id, updates));
    });
  };
};

export const buyItem = (id, uid) => ({
  type: 'BUY_ITEM',
  id,
  uid
});

export const startBuyItem = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/items/${id}`).update({ isBought: true, buyerId: uid }).then(() => {
      dispatch(buyItem(id, uid));
    });
  };
};

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

export const startSetItems = () => {
  return (dispatch) => {
    return database.ref('/items').once('value').then((snapshot) => {
      const items = [];
      snapshot.forEach((childSnapshot) => {
        items.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setItems(items));
    });
  };
}