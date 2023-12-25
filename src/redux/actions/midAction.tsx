import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
} from '../constants/constants';

export const updateUserAuthDetails = userAuth => {
  return {
    type: UPDATE_USER_AUTH_DETAILS,
    userAuth,
  };
};

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
