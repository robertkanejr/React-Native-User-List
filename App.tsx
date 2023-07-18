/**
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import UserList from './features/userList/UserList';
import store from './app/store';

function App({}): JSX.Element {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <UserList />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
}

export default App;
