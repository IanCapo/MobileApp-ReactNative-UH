import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import initialState from "../../initialState.json"; 
import Screen from '../components/Screen';


export default function MemoriesScreen({navigation}) {
const memories = initialState.memories;
  return (
  <Screen style={ styles.container }>
      { memories.map((memory) => (
        <TouchableOpacity key={memory.id} onPress={() => navigation.navigate('MemoryDetail', {otherParam: memory})}>
          <Image source={{ uri: memory.image.url }} style={styles.image} />
        </TouchableOpacity>
      )) }
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    margin: 10
  }
});