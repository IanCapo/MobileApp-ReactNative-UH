import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import colors from '../utilities/colors';

import Screen from '../components/Screen';
import ImageInput from '../components/ImageInput';

export default function MemoryDetailsScreen({ route }) {
  const { key, otherParam } = route.params;
  return (
  <Screen key={key} style={ styles.container }>
      <ImageInput existingImage={otherParam.image} style={styles.image} type="galery"/>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{otherParam.title}</Text>
        <Text style={styles.date}>{otherParam.date}</Text>
        <Text style={styles.description}>{otherParam.description}</Text>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden"
  },
  date: {
    alignSelf: "flex-end",
    top: -16
  },
  detailsContainer: {
    padding: 20,
    height: "100%"
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: 'white',
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20,
  }
});