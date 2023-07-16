import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from '../../api/apiClient';

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

//Create an async thunk to fetch users from the API
//it creates actions for the pending, rejected, and fulfilled states
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

//Use this slice to define the actions that can be dispatched to update the state
const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  // extra reducers hook into the lifecycle events of the app and are then used to respond to those actions
  //in this case, we are responding to the fetchUsers actions that are dispatched by the async thunk
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
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
