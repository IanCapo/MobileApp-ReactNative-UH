import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../utilities/colors';

import Icon from './Icon'

export default function ImageWithIcon({image}) {
  return (
  <View style={ styles.container } >
    <Image source={{ uri: image }} style={ styles.image } />
    <Icon name="camera" size={30} color="darkgrey" backgroundColor={colors.primary} style={styles.icon} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 170
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: -20,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});