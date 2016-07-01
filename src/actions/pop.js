import * as type from '../constants/appType';
import Newservice from '../utils/popRequest';

export const fetchNews = (): Object => {
	return {
		type: type.FETCHING_NEWS
	}
}

export const fetchNextPageNews = (): Object => {
	return {
		type: type.FETCHING_NEXT_PAGE_NEWS
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
		type: type.ERROR_GETTING_NEWS,
	};
};

export const retrievedNews = (data: Object): Object => {
	return {
		type: type.RECEIVED_DATA,
		data
	};
};

export const retrievedMoreNews = (data: Object): Object => {
	return {
		type: type.RECEIVED_MORE_DATA,
		data
	};
};