import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import VerticalLine from "../components/VerticalLine";
import colors from '../utilities/colors'
import Icon from './Icon';


export default function ProgressItem({ onPress, lastItem = true, text, icon, date }) {
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={styles.container} > 
        <Icon name={ date ? icon : "foot-print" } size={50} style={styles.icon } backgroundColor={date ? colors.green : colors.secondary } />
        <Text>{text}</Text>
        {!lastItem && <VerticalLine style={ styles.line } /> }
      </View>
    </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 130
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  line: {
    position: 'absolute',
    left: 35,
    top: 105,
    width: 10,
    height: 60,
    backgroundColor: colors.yellow
  }
});