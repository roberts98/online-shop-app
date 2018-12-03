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
    case 'SORT_BY_DATE_DESC':
      return {
        ...state,
        sortBy: 'date-desc'
      };
    case 'SORT_BY_DATE_ASC':
      return {
        ...state,
        sortBy: 'date-asc'
      };
    case 'SORT_BY_PRICE_DESC':
      return {
        ...state,
        sortBy: 'price-desc'
      };
    case 'SORT_BY_PRICE_ASC':
      return {
        ...state,
        sortBy: 'price-asc'
      };
    default:
      return state;
  };
};

export default filtersReducer;