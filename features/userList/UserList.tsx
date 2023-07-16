import React, {FunctionComponent, useEffect} from 'react';
import {Text} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './userListSlice';

const UserList: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  //access state needed from global app state/store
  const screenState = useAppSelector(state => state.userList);

  //dispatch fetchUsers action to fetch users from API on initial render
  useEffect(() => {
    dispatch(fetchUsers({page: 1}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* render different UIs based on the state of the network request */}
      {screenState.loading && <Text>Loading...</Text>}
      {screenState.error && <Text>Error</Text>}
      {!screenState.loading && !screenState.error && <Text>Default</Text>}
    </>
  );
};

export default UserList;
