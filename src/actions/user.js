import * as type from '../constants/appType';
import service from '../utils/userRequest'

export const fetchNewsDetail = (): Object => {
  return {
    type: type.FETCHING_USER
  }
}



export const getNewsDetail = (loginname: String): Function => {
  return (dispatch) => {
    dispatch(fetchNewsDetail());
    service.fetchNews(dispatch, loginname);
  };
};



export const errorOnReceivingNewsDetail = (): Object => {
  return {
    type: type.ERROR_GETTING_USER,
  };
};

export const retrievedNewsDetail = (data: Object): Object => {
  return {
    type: type.RECEIVED_DATA_USER,
    data
  };
};


export const setUserdefault = (): Object => {
  return {
    type: type.SET_DEFAULT_USER,
  };
};
