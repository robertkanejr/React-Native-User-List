import React, {FunctionComponent, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './userListSlice';
import UserListItem from './UserListItem';

const UserList: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  //access state needed from global app state/store
  const screenState = useAppSelector(state => state.userList);

  //dispatch fetchUsers action to fetch users from API on initial render
  useEffect(() => {
    dispatch(fetchUsers({page: 1}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //dispatch fetchUsers action to fetch users from API when user scrolls to end of list
  const handleOnEndReached = () => {
    if (!screenState.loading) {
      dispatch(fetchUsers({page: screenState.nextPage}));
    }
  };

  return (
    <>
      {/* render different UIs based on the state of the network request */}
      {screenState.loading && (
        <View style={style.container}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {screenState.error && (
        <View style={style.container}>
          <Text style={style.error}>Error loading user data</Text>
        </View>
      )}
      {/* render the list of users */}
      <FlatList
        data={screenState.users}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <UserListItem user={item} />}
        onEndReached={handleOnEndReached}
      />
    </>
  );
};

//Styles for container and error text
const style = StyleSheet.create({
  container: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: 20,
    color: 'red',
  },
});

export default UserList;
