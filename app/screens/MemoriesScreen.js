import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import initialState from "../../initialState.json";

export default function MemoriesScreen({navigation}) {
const memories = initialState.memories;


  return (
  <View style={ styles.container }>
      { memories.map(memory => (
        <TouchableHighlight key={memory.id} onPress={() => navigation.navigate('MemoryDetail', {otherParam: memory})}>
          <Image source={{ uri: memory.image }} style={styles.image} />
        </TouchableHighlight>
      )) }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    margin: 10
  }
});