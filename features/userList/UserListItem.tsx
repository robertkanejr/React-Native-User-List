import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {User} from './userListSlice';

//Styles for UserListItem
const style = StyleSheet.create({
  nameText: {
    padding: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'purple',
    borderWidth: 3,
  },
});

const UserListItem: FunctionComponent<{user: User}> = ({user}) => {
  return (
    <View style={style.container}>
      <Image style={style.thumbnail} source={{uri: user.picture.thumbnail}} />
      <Text style={style.nameText}>{user.name.first}</Text>
    </View>
  );
};

export default UserListItem;
