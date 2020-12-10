import React from 'react';
import { StyleSheet, Image} from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';


export default function ProfileScreen(props) {

  return (
    <Screen style={ styles.container }>
      <Image
        style={styles.image}
        source={ require('../assets/baby.jpeg')}
      />
      <InputWithLabel icon="alphabetical" placeholder="Name" />
      <InputWithLabel icon="calendar" placeholder="DoB" />
      <InputWithLabel icon="scale" placeholder="Weight" />
      <InputWithLabel icon="human-male-height" placeholder="Height" />
      <InputWithLabel icon="face" placeholder="Head circumference" />
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  text: {
    top: 30,
    fontSize: 20,
    marginTop: 10,
    alignSelf: "flex-start",
  }
});