import React from 'react';
import Constants from 'expo-constants'
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default function screen(props) {
  return (
  <SafeAreaView style={ styles.screen }>
      <Text>Hello there</Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  view: {
    flex: 1,
  },
});