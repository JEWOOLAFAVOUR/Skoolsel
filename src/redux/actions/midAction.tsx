import {
  UPDATE_USER_AUTH_DETAILS,
  UPDATE_SEARCH_FILTER,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  UPDATE_RADIO_SELECTION,
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

// Update the action to handle radio selections and dispatch the corresponding searchFilter updates
export const updateRadioSelection = (item, selectedId) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_RADIO_SELECTION,
      item,
      selectedId,
    });

    // Get the current state
    const {searchFilter} = getState().mid;

    // Create a new filter object for the radio selection
    const radioFilter = {
      id: selectedId,
      title: item.title,
      // You may want to include additional properties based on your needs
    };

    // If a radio option is selected, add it to the searchFilter array; otherwise, remove it
    if (selectedId) {
      // Check if the radio selection is not already in the searchFilter array
      if (!searchFilter.some(filter => filter.id === selectedId)) {
        dispatch(addSearchFilter(radioFilter));
      }
    } else {
      // Remove the radio selection from the searchFilter array
      dispatch(removeSearchFilter(radioFilter));
    }
  };
};
