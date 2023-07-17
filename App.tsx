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
    <SafeAreaView>
      <ReduxProvider store={store}>
        <StatusBar />
        <UserList />
      </ReduxProvider>
    </SafeAreaView>
  );
}

export default App;
