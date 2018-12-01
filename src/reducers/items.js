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
          return item;
        } else {
          return item;
        }
      });
    default:
      return state;
  };
};

export default itemsReducer;