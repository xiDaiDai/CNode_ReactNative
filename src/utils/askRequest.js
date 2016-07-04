import {
  errorOnReceivingNews,
  retrievedNews,
  retrievedMoreNews
} from '../actions/ask'


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
      .catch((error) => {
        dispatch(errorOnReceivingNews());
      })
      .then((responseData) => {
        dispatch(retrievedNews(responseData));
      }).done();
  }

  fetchNextPageNews(dispatch) {
    this.pageNumber += 1;
    let url = baseUrl + this.pageNumber;
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        dispatch(errorOnReceivingNews());
      })
      .then((responseData) => {
        dispatch(retrievedMoreNews(responseData));
      }).done();
  }


}

export default new NewsService();
