import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from '../features/userList/userListSlice';

//Combine all reducers specified by the app's individual slices
const rootReducer = combineReducers({
  userList: userListSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
