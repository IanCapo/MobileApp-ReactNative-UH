import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from "../components/Screen";
import ProgressItem from "../components/ProgressItem";
import cache from '../utilities/cache';


export default function MilesStones({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const [myData, setMyData] = useState();

  useEffect(() => {
    const cachedData = async () => {
      const data = await cache.getData('milestones');
      const newDataObj = JSON.parse(data.data);
  
      setMyData(newDataObj);
      setIsLoading(false);
    }
    cachedData()
  }, [])

  return (
  <Screen style={ styles.container }>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Milestones</Text>
      </View>
    {isLoading && <Text>Please wait while we're fetching your data</Text>}
  
    {myData && myData.sort((a, b) => {
        const itemA = new Date(a.date).getTime()
        const itemB = new Date(b.date).getTime()
        const item = itemA - itemB;
        return item
      }
      ).map((item, index) => {
        return (
          <ProgressItem
            onPress={() => navigation.navigate('MilestoneDetail', { otherParam: item })}
            lastItem={index === myData.length - 1}
            text={item.title}
            icon={item.icon}
            date={item.date}
            key={item.key}
          />
        )
      }
      )
      }
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 30
  },
    headline: {
    fontSize: 24,
  },
  headlineContainer: {
    paddingTop: 25,
    width: "100%",
    alignItems:
      "center"
  },
});