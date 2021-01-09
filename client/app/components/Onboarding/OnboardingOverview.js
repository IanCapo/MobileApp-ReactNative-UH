import React from 'react';
import {Image, View, StyleSheet, Text } from 'react-native';
import colors from '../../utilities/colors';

import Screen from '../Screen';
import VerticalLine from '../VerticalLine';

export default function OnboardingOverview(props) {
  return (
  <Screen style={ styles.container }>
      <Image
        style={styles.image}
        source={require('../../assets/Overview.png')} />
        <VerticalLine style={ styles.line } />
        <View style={ styles.description }>
          <Text>
            Go back in time and revisit pressues moments on the memory tab, follow your little ones milestone and compare weight and length to others babies.
            </Text>
            <Text>
            
          </Text>   
        <Text>
          Let's get started!
          </Text>  
          <Text style={styles.button}>Swipe left</Text>
        </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    color: colors.secondary
  },
  container: {
    flex: 1
  }, 
  description: {
    padding: 30,
    paddingTop: 10
  },
  line: {
    backgroundColor: "grey",
    height: 1,
    width: "100%",
    marginBottom: 20,
    marginTop: 10
  },
  image: {
    width: '58%',
    height: 350,
    flex: 1,
    resizeMode: 'contain',
    alignSelf: "center",
    marginBottom: 20,
  }
});