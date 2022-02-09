import axios from 'axios';
import { commentsSlice } from './CommentsSlice';
import { commentDetails } from './commentDetails';

export const fetchComments =
	(limit = 10, page = 1) =>
	async dispatch => {
		try {
			dispatch(commentsSlice.actions.commentsFetching());
			const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
				params: {
					_limit: limit,
					_page: page,
				},
			});
			dispatch(commentsSlice.actions.commentsFetchingSuccess(response.data));
		} catch (error) {
			dispatch(commentsSlice.actions.commentsFetchingError(error.message));
		}
	};

export const fetchDetails = id => async dispatch => {
	try {
		dispatch(commentDetails.actions.detailsFetching());
		const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
		dispatch(commentDetails.actions.detailsFetchingSuccess(response.data));
	} catch (error) {
		dispatch(commentDetails.actions.detailsFetchingError(error.message));
	}
};
