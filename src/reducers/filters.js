const defaultState = {
  text: '',
  category: 'all',
  sortBy: 'date'
};

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_PRICE':
      return {
        ...state,
        sortBy: 'price'
      };
    default:
      return state;
  };
};

export default filtersReducer;