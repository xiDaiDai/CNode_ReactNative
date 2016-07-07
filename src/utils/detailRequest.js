import {
  errorOnReceivingNewsDetail,
  retrievedNewsDetail,
  retrievedMoreNewsDetail
} from '../actions/detail'

import {
  ToastAndroid
} from 'react-native';

const detail_url = "http://cnodejs.org/api/v1/topic/";


class NewsService {

  fetchNews(dispatch, id) {

    let url =
      detail_url +
      id + '?mdrender=true';
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(retrievedNewsDetail(responseData));
      }).catch((err) => {
        dispatch(errorOnReceivingNewsDetail());
        ToastAndroid.show(err.message, 3000)
      }).done();
  }



}

export default new NewsService();
