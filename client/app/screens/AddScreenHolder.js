import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import usePostData from '../hooks/usePostData';
import AddScreen from './AddScreen';


export default function AddScreenHolder({navigation}) {
  const [uploaded, setUploaded] = useState(false);

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
    setUploaded(false);
  }
  return (
    <React.Fragment>
      {!uploaded && <AddScreen onPress={() => setUploaded(true)} />}
      {uploaded &&
        <View style={styles.container}>
         <Button title="Add new entry" onPress={() => setUploaded(false)}/>
         <Button title="Go to dashboard" onPress={() => goToDashboard() }/>
      </View>
    }
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