import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import colors from '../utilities/colors';

import Screen from '../components/Screen';

export default function MemoryDetailsScreen({ route }) {
  const { key, otherParam } = route.params;
  return (
  <Screen key={key} style={ styles.container }>
      <ImageBackground source={{ uri: otherParam.image }} style={styles.image} resizeMode="center" />
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
  },
  title: {
    fontSize: 20,
  }
});