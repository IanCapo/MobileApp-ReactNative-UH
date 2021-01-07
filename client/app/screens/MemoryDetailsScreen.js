import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Screen from '../components/Screen';

export default function MemoryDetailsScreen({ route }) {
  const { key, otherParam } = route.params;
  const dateArray = otherParam.date.split('T')[0].split('-');
  const date = `${dateArray[1]}.${dateArray[2]}.${dateArray[0]}`;

  console.log(otherParam);
  
  return (
  <Screen key={key} style={ styles.container }>
      <Image source={{ uri: otherParam.image.url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{otherParam.title}</Text>
        <Text style={styles.date}>{date}</Text>
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