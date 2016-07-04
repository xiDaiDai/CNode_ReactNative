import * as types from "../constants/appType";

const initialState = {
	isLoading: true,
	isLoadingMore: false,
	hasNewsToDisplay: false,
	news: [],
	loadMoreNews: [],
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_NEWS:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case types.FETCHING_NEXT_PAGE_NEWS:
			return Object.assign({}, state, {
				isLoadingMore: true,
			});


		case types.ERROR_GETTING_NEWS:
			return Object.assign({}, state, {
				isLoading: false,
				isLoadingMore: false,
				news: []
			});

		case types.RECEIVED_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				isLoadingMore: false,
				news: action.data.data
			});

		case types.RECEIVED_MORE_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				isLoadingMore: false,
				loadMoreNews: action.data.data,
				news: state.news.concat(action.data.data),
			});

		default:
			return state;
	}
};
export default newsReducer;
