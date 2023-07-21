import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from '../../api/apiClient';

//Serialize user data fetched from the API into usable objects
export type User = {
  name: {
    first: string;
  };
  picture: {
    thumbnail: string;
  };
};

//Define the state of the userListSlice
//represents the state that the screen needs to render
export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: false,
  nextPage: 1,
};

//Create an async thunk to fetch users from the API
//with actions for the rejected, and fulfilled states
export const fetchUsers = createAsyncThunk<{users: User[]}, {page: number}>(
  'fetchUsers',
  async ({page}) => {
    const response = await apiClient.fetchUsers(page, 10);
    if (response.kind === 'success') {
      return {
        users: response.body ?? [],
      };
    } else {
      throw 'Failed to fetch users';
    }
  },
);

//Defines the actions that can be dispatched to update the state
const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  // extra reducers to hook into the lifecycle events of the app and respond to them
  //in this case, we are responding to the fetchUsers actions that are dispatched by the async thunk
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.nextPage += 1;
        //append the new users to the existing list of users (pagination)
        state.users = state.users.concat(action.payload.users);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

//export reducers to rest of the app
export default userListSlice.reducer;
