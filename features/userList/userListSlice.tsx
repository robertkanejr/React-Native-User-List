import {createSlice} from '@reduxjs/toolkit';

//Use this type to serialize user data fetched from the API into usable objects
export type User = {
  name: string;
};

//Use this type to define the state of the userList slice
//represents the state that the screen needs to render
export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: false,
};

//Use this slice to define the actions that can be dispatched to update the state
const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
});

//export reducers to rest of the app
export default userListSlice.reducer;
