import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

import Screen from "../components/Screen";
import ProgressItem from "../components/ProgressItem";
import useApi from '../hooks/useApi';
import cache from '../utilities/cache';


export default function MilesStones({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const { data } = useApi.useFetch("milestones");
  const [myData, setMyData] = useState(data);


  useEffect(() => {
    const cachedData = async () => {
      const data = await cache.getData('milestones')
      setMyData(JSON.parse(data.data));
      setIsLoading(false);
    }
    cachedData()
  }, [])

  return (
  <Screen style={ styles.container }>
    {isLoading && <Text>Please wait while we're fetching your data</Text>}
    {myData && myData.map((item, index) => (
        <ProgressItem 
          onPress={() => navigation.navigate('MilestoneDetail', { otherParam: item })} 
          lastItem={index === myData.length - 1}
          text={item.title}
          icon={item.icon}
          date={item.date}
          key={item.id}
          />
        )
      ) 
    }
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});