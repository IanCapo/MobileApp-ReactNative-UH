import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../utilities/colors';

export default function Icon({ backgroundColor, name, size, color, style }) {
  return (
  <View style={ style ? style : styles.container } backgroundColor={ backgroundColor ? backgroundColor : colors.primary }>
      <MaterialCommunityIcons name={name} size={size} color={color}  />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});