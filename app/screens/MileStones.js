import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function MilesStones(props) {
  return (
  <View style={ styles.container }>
      <Text>Milestones</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue"
  }
});