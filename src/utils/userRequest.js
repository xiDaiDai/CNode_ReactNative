import {
  errorOnReceivingNewsDetail,
  retrievedNewsDetail,
  retrievedMoreNewsDetail
} from '../actions/user'


const detail_url = "http://cnodejs.org/api/v1/user/";


class NewsService {

  fetchNews(dispatch, loginname) {

    let url = detail_url + loginname;
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        dispatch(errorOnReceivingNewsDetail());
      })
      .then((responseData) => {
        dispatch(retrievedNewsDetail(responseData));
      }).done();
  }



}

export default new NewsService();
