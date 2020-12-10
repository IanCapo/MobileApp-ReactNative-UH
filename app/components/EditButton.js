import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../utilities/colors';

export default function EditButton({ onPress }) {
  return (
  <View style={ styles.container }>
      <MaterialCommunityIcons style={styles.pen} name="border-color" size={20} color={colors.secondary} onPress={onPress}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    
  }
});