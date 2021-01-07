import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../utilities/colors';

export default function SimpleButton({text, onPress, style}) {
  return (
  <TouchableOpacity style={ [styles.container], style } onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 12,
    marginTop: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});