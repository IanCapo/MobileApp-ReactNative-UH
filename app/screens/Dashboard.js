import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';


import Screen from '../components/Screen';
import Seperator from '../components/Seperator';


export default function Dashboard(props) {
  return (
  <Screen style={ styles.container }>
      <Text>Dashboard</Text>
      <Seperator />
      <View style={ styles.row }>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <Icon name="account" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <Icon name="heart-multiple-outline" />
      </TouchableOpacity>
      </View>
      <View style={ styles.row }>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Icon name="graphql" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Icon name="airballoon" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  }, 
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 40,
  }
});