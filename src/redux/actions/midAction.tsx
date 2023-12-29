import {
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  POST_PRODUCT,
} from '../constants/constants';

export const updateFilterDetails = searchFilter => {
  return {
    type: UPDATE_SEARCH_FILTER,
    searchFilter,
  };
};

export const addSearchFilter = filter => {
  return {
    type: ADD_SEARCH_FILTER,
    filter,
  };
};

export const removeSearchFilter = filter => {
  return {
    type: REMOVE_SEARCH_FILTER,
    filter,
  };
};

export const postProduct = productPost => {
  return {
    type: POST_PRODUCT,
    productPost,
  };
};
