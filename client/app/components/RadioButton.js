import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../utilities/colors';

export default function RadioButton({onPress}) {
  const [weight, setWeight] = useState(true);
  const [length, setLength] = useState(false);

  const handlePress = (val) => {
    onPress(val)
    setWeight(!weight);
    setLength(!length)
  }

  return (
  <View style={ styles.container }>
      <TouchableOpacity style={ [styles.button, { backgroundColor: weight ? colors.green : colors.yellow }] } onPress={() => handlePress(true)} backgroundColor={colors.green}>
        <Text>Weight</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ [styles.button, { backgroundColor: length ? colors.green : colors.yellow }] } onPress={() => handlePress(false)}>
        <Text>Length</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  button: {
    width: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: colors.yellow,
  }
});