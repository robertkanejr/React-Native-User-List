import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from '../features/userList/userListSlice';

//Combine all reducers specified by the app's individual slices
const rootReducer = combineReducers({
  userList: userListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
