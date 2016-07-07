import {
  errorOnReceivingNewsDetail,
  retrievedNewsDetail,
  retrievedMoreNewsDetail
} from '../actions/user'
import {
  ToastAndroid
} from 'react-native';

const detail_url = "http://cnodejs.org/api/v1/user/";


class NewsService {

  fetchNews(dispatch, loginname) {

    let url = detail_url + loginname;
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
