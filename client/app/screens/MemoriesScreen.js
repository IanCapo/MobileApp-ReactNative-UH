import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import cache from '../utilities/cache';


export default function MemoriesScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true)
  const { data } = useApi.useFetch("memories");
  const [myData, setMyData] = useState(data);


  useEffect(() => {
    const cachedData = async () => {
      const data = await cache.getData('memories')
      setMyData(JSON.parse(data.data));
      setIsLoading(false);
    }
    cachedData()
  }, [])

  return (
  <Screen style={ styles.container }>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Weight percentile</Text>
      </View>
      {isLoading && <Text>Please wait while we're fetching your data</Text>}
      {myData && myData.map((memory) => (
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
  headline: {
    fontSize: 24,
  },
  headlineContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    width: "100%",
    alignItems:
      "center"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    margin: 10
  }
});