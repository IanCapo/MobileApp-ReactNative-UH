import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utilities/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AddButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 30,
    height: 80,
    justifyContent: "center",
    width: 80,
  }
});