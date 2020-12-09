import React from 'react';
import Constants from 'expo-constants'
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function screen({children, style}) {
  return (
  <SafeAreaView style={ styles.screen }>
      <View style={[styles.view, style]}>{children}</View>
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