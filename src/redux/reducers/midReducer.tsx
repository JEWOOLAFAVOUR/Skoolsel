import {
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  POST_PRODUCT,
} from '../constants/constants';

const initialState = {
  searchFilter: [],
  productPost: [],
};

const midReducer = (state = initialState, action) => {
  const {type, searchFilter, filter, productPost} = action;

  switch (type) {
    case UPDATE_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: searchFilter,
      };
    case ADD_SEARCH_FILTER:
      if (!state.searchFilter.some(f => f.id === filter.id)) {
        return {
          ...state,
          searchFilter: [...state.searchFilter, filter],
        };
      }
      return state;

    case REMOVE_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: state.searchFilter.filter(f => f.id !== filter.id),
      };
    case POST_PRODUCT:
      return {
        ...state,
        productPost: [...state.productPost, productPost],
      };
    default:
      return state;
  }
};

export default midReducer;
