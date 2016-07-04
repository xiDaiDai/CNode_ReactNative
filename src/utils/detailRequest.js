import {
  errorOnReceivingNewsDetail,
  retrievedNewsDetail,
  retrievedMoreNewsDetail
} from '../actions/detail'


const detail_url = "http://cnodejs.org/api/v1/topic/";


class NewsService {

  fetchNews(dispatch, id) {

    let url = detail_url + id;
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
