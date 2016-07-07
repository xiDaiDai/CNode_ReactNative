import {
  errorOnReceivingNews,
  retrievedNews,
  retrievedMoreNews
} from '../actions/ask'

import {
  ToastAndroid
} from 'react-native';


const baseUrl = "https://cnodejs.org/api/v1/topics?limit=15&tab=ask&page=";


class NewsService {

  constructor() {
    this.pageNumber = 1;
  }

  fetchNews(dispatch) {
    this.pageNumber = 1;
    let url = baseUrl + this.pageNumber;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(retrievedNews(responseData));
      }).catch((err) => {
        dispatch(errorOnReceivingNews());
        ToastAndroid.show("网络异常", 3000)
      }).done();
  }

  fetchNextPageNews(dispatch) {
    this.pageNumber += 1;
    let url = baseUrl + this.pageNumber;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(retrievedMoreNews(responseData));
      }).catch((err) => {
        ToastAndroid.show("网络异常", 3000)

      }).done();
  }


}

export default new NewsService();
