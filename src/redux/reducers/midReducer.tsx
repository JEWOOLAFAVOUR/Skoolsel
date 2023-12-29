import {productData} from '../../components/utils/productDetailsData';
import {icons} from '../../constants';
import {
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  POST_PRODUCT,
} from '../constants/constants';

const initialState = {
  searchFilter: [],
  productPosts: productData,
};

const midReducer = (state = initialState, action) => {
  const {type, searchFilter, filter, productPosts} = action;

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
        productPosts: [productPosts, ...state.productPosts],
      };
    default:
      return state;
  }
};

export default midReducer;
