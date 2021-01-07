import React from 'react';
import { View, StyleSheet, Button } from 'react-native';


export default function AddScreenHolder({navigation}) {

  return (
    <React.Fragment>
        <View style={styles.container}>
         <Button title="Add new entry" onPress={() => navigation.navigate('Add')}/>
         <Button title="Go to dashboard" onPress={() => navigation.navigate('Dashboard') }/>
      </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 20,
    flex: 1,
    alignItems: "center"
  }
});