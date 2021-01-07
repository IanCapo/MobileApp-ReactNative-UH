import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import SimpleButton from '../components/SimpleButton'


export default function AddScreenHolder({navigation}) {

  return (
      <View style={styles.container}>
        <SimpleButton text="Add new entry" onPress={() => navigation.navigate('Add')}/>
        <SimpleButton text="Go to dashboard" onPress={() => navigation.navigate('Dashboard') }/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 20,
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },
  button: {
    marginTop: 40,
    marginBottom: 20
  }
});