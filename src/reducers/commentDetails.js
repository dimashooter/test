import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	details: [],
	isLoading: false,
	error: '',
	isActive: '',
};

export const commentDetails = createSlice({
	name: 'details',
	initialState,
	reducers: {
		detailsFetching(state) {
			state.isLoading = true;
		},
		detailsFetchingSuccess(state, action) {
			state.details = action.payload;
			state.error = '';
			state.isLoading = false;
		},
		detailsFetchingError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});

export default commentDetails.reducer;
