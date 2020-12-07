import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../utilities/colors';

export default function Seperator() {
  return (
  <View style={ [styles.container] } />
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 2,
    backgroundColor: colors.primary,
    marginTop: 10
  }
});