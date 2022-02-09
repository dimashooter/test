import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commentsReducer from '../reducers/CommentsSlice';
import commentDetails from '../reducers/commentDetails';
export const rootReducer = combineReducers({
	commentsReducer,
	commentDetails,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
