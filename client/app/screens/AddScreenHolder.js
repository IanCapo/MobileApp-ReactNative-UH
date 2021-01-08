import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SimpleButton from '../components/SimpleButton';
import colors from '../utilities/colors';


export default function AddScreenHolder({navigation}) {
  return (
      <View style={styles.container}>
        <Text>Congrats - we're processing your data. What's next?</Text>
        <SimpleButton style={ styles.button} text="Add new entry" onPress={() => navigation.navigate('Add')}/>
      <SimpleButton style={styles.button}  text="Go to dashboard" onPress={() => navigation.navigate('Dashboard', {Screen: 'Dashbaord'}) }/>
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
    width: 250,
    padding: 12,
    marginTop: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});