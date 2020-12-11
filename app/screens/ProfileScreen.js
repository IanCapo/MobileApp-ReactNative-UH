import React from 'react';
import { StyleSheet, Image} from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import initialState from '../../initialState.json';


export default function ProfileScreen(props) {

  return (
    <Screen style={ styles.container }>
      <Image
        style={styles.image}
        source={ require('../assets/baby.jpeg')}
        withEditOption={false}
      />
      <InputWithLabel icon="alphabetical" placeholder={initialState.name} type="text" withEditOption={false} />
      <InputWithLabel icon="calendar" placeholder={initialState.dob} type="text" withEditOption={false} />
      <InputWithLabel icon="scale" placeholder={initialState.weight.toString()} type="number" unit="g" withEditOption={false}  />
      <InputWithLabel icon="human-male-height" placeholder={initialState.height.toString()} type="number" unit="cm" withEditOption={false} />
      <InputWithLabel icon="face" placeholder={initialState.head.toString()} type="number" unit="cm" withEditOption={false} />
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