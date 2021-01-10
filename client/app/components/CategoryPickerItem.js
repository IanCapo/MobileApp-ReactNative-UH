import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Icon from './Icon';
import colors from '../utilities/colors';

export default function CategoryPickerItem({name, onPress, value, isActive}) {
const handlePress = () => {
  onPress(value);
}
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={name} style={styles.icon} value={value} size={30} color={colors.white} backgroundColor={!isActive ? colors.primary : colors.green} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  }
});