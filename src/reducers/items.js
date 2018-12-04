const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'EDIT_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        }
      });
    case 'BUY_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          item.isBought = true;
          item.buyerId = action.uid;
          return item;
        } else {
          return item;
        }
      });
    case 'SET_ITEMS':
      return action.items;
    case 'INCREMENT_VIEWS':
    return state.map((item) => {
      return {
        ...item,
        ...item.views
      }
    });
    default:
      return state;
  };
};

export default itemsReducer;