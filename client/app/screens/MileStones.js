import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import ProgressItem from "../components/ProgressItem";
import initialState from '../../initialState';


export default function MilesStones({ navigation }) {
  return (
  <Screen style={ styles.container }>
    { initialState.milestones.map((item, index) => (
        <ProgressItem 
          onPress={() => navigation.navigate('MilestoneDetail', { otherParam: item })} 
          lastItem={index === initialState.milestones.length - 1}
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