import React from 'react';
import * as types from "../constants/appType";

const initialState = {
  isLoading: true,
  data: null,
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_USER:

      return {
        ...state,
        isLoading: true,
      };
    case types.ERROR_GETTING_USER:
      return {
        ...state,
        isLoading: false,
      };
    case types.RECEIVED_DATA_USER:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case types.SET_DEFAULT_USER:
      return initialState;

    default:
      return state;
  }
};
export default detailReducer;
