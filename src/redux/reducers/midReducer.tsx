import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_SEARCH_FILTER,
} from '../constants/constants';

const initialState = {
  userAuth: {},
  searchFilter: [],
};

const midReducer = (state = initialState, action) => {
  const {type, userAuth, searchFilter} = action;

  switch (type) {
    case UPDATE_USER_AUTH_DETAILS:
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          ...userAuth,
        },
      };
    case UPDATE_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: [],
      };
    default:
      return state;
  }
};

export default midReducer;
