import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	comments: [],
	isLoading: false,
	error: '',
	pages: 0,
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		commentsFetching(state) {
			state.isLoading = true;
		},
		commentsFetchingSuccess(state, action) {
			state.comments = action.payload;
			state.error = '';
			state.isLoading = false;
			state.pages = 500;
		},
		commentsFetchingError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		},
	
	},
});

export default commentsSlice.reducer;
