import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_SEARCH_FILTER,
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
    userAuth,
  };
};
