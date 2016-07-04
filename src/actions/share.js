import * as type from '../constants/appType';
import Newservice from '../utils/shareRequest';

export const fetchNews = (): Object => {
  return {
    type: type.FETCHING_SHARE
  }
}

export const fetchNextPageNews = (): Object => {
  return {
    type: type.FETCHING_NEXT_PAGE_SHARE
  }
}

export const getNews = (): Function => {
  return (dispatch) => {
    dispatch(fetchNews());
    Newservice.fetchNews(dispatch);
  };
};


export const getNextPageNews = (): Function => {
  return (dispatch) => {
    dispatch(fetchNextPageNews());
    Newservice.fetchNextPageNews(dispatch);
  };
};

export const errorOnReceivingNews = (): Object => {
  return {
    type: type.ERROR_GETTING_SHARE,
  };
};

export const retrievedNews = (data: Object): Object => {
  return {
    type: type.RECEIVED_DATA_SHARE,
    data
  };
};

export const retrievedMoreNews = (data: Object): Object => {
  return {
    type: type.RECEIVED_MORE_DATA_SHARE,
    data
  };
};
