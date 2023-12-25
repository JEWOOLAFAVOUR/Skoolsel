import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  UPDATE_RADIO_SELECTION,
} from '../constants/constants';

const initialState = {
  userAuth: {},
  searchFilter: [],
  radioSelection: {},
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
        searchFilter: searchFilter,
      };
    case UPDATE_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: searchFilter,
      };
    case ADD_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: [...state.searchFilter, action.filter],
      };
    case REMOVE_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: state.searchFilter.filter(
          filter => filter.id !== action.filter.id,
        ),
      };
    case UPDATE_RADIO_SELECTION:
      return {
        ...state,
        radioSelection: {
          ...state.radioSelection,
          [action.item.id]: action.selectedId,
        },
      };
    default:
      return state;
  }
};

export default midReducer;
