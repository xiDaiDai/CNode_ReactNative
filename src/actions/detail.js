import * as type from '../constants/appType';
import service from '../utils/detailRequest'

export const fetchNewsDetail = (): Object => {
  return {
    type: type.FETCHING_DETAIL_NEWS
  }
}



export const getNewsDetail = (id: String): Function => {
  return (dispatch) => {
    dispatch(fetchNewsDetail());
    service.fetchNews(dispatch, id);
  };
};



export const errorOnReceivingNewsDetail = (): Object => {
  return {
    type: type.ERROR_DETAIL_NEWS,
  };
};

export const retrievedNewsDetail = (data: Object): Object => {
  return {
    type: type.RECEIVED_DETAIL_NEWS,
    data
  };
};
