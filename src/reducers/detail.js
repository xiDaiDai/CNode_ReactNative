import React from 'react';
import * as types from "../constants/appType";

const initialState = {
  isLoading: true,
  data: null,
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_DETAIL_NEWS:

      return {
        ...state,
        isLoading: true,
      };
    case types.ERROR_DETAIL_NEWS:
      return {
        ...state,
        isLoading: false,
      };
    case types.RECEIVED_DETAIL_NEWS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    default:
      return state;
  }
};
export default detailReducer;
