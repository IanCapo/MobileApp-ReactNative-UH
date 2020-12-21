import React from 'react';
import Constants from 'expo-constants'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Screen({children, style}) {
  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <SafeAreaView style={styles.view}>
          <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});