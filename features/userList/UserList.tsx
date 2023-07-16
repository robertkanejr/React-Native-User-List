import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

const UserList: FunctionComponent = () => {
  //access state needed from global app state/store
  const screenState = useSelector((state: RootState) => state.userList);

  return (
    <>
      {screenState.loading && <Text>Loading...</Text>}
      {screenState.error && <Text>Error</Text>}
      {!screenState.loading && !screenState.error && <Text>Default</Text>}
    </>
  );
};

export default UserList;
