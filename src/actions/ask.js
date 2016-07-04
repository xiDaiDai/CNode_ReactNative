import * as type from '../constants/appType';
import Newservice from '../utils/askRequest';

export const fetchNews = (): Object => {
  return {
    type: type.FETCHING_ASK
  }
}

export const fetchNextPageNews = (): Object => {
  return {
    type: type.FETCHING_NEXT_PAGE_ASK
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
    type: type.ERROR_GETTING_ASK,
  };
};

export const retrievedNews = (data: Object): Object => {
  return {
    type: type.RECEIVED_DATA_ASK,
    data
  };
};

export const retrievedMoreNews = (data: Object): Object => {
  return {
    type: type.RECEIVED_MORE_DATA_ASK,
    data
  };
};
