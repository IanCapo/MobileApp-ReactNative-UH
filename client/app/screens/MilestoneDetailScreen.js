import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Screen from "../components/Screen";

export default function MilestoneDetailScreen({ route }) {
  const { key, otherParam } = route.params;
  return (
    <Screen key={key} style={styles.container}>
      <Image source={{uri: otherParam.image}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{otherParam.title}</Text>
        <Text style={styles.date}>{otherParam.date}</Text>
        <Text>{otherParam.info}</Text>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
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