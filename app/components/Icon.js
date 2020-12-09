import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../utilities/colors';

export default function Icon({name, size, color}) {
  return (
  <View style={ styles.container }>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});