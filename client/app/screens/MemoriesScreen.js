import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import Screen from '../components/Screen';
import useApi from '../hooks/useApi';


export default function MemoriesScreen({navigation}) {

 const { data, loading, error } = useApi("memories");
 

  return (
  <Screen style={ styles.container }>
      {loading && <Text>Please wait while we're fetching your data</Text>}
      {error && <Text>Sorry, we couldn't fetch your data</Text>}
      {data && data.map((memory) => (
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