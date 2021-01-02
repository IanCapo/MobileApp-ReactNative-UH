import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Screen from "../components/Screen";
import ProgressItem from "../components/ProgressItem";
import useApi from '../hooks/useApi'


export default function MilesStones({ navigation }) {
  const { data, loading, error } = useApi("milestones");

  return (
  <Screen style={ styles.container }>
    {loading && <Text>Please wait while we're fetching your data</Text>}
    {error && <Text>Sorry, we couldn't fetch your data</Text>}
    {data && data.map((item, index) => (
        <ProgressItem 
          onPress={() => navigation.navigate('MilestoneDetail', { otherParam: item })} 
          lastItem={index === data.length - 1}
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