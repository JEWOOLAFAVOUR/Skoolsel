import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_FILTER_DETAIL,
} from '../constants/constants';

export const updateUserAuthDetails = userAuth => {
  return {
    type: UPDATE_USER_AUTH_DETAILS,
    userAuth,
  };
};

export const updateFilterDetails = userAuth => {
  return {
    type: UPDATE_FILTER_DETAIL,
    userAuth,
  };
};
