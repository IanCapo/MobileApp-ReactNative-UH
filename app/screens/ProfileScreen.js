import React from 'react';
import { StyleSheet, Image} from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import initialState from '../../initialState.json';
import ImageInput from '../../app/components/ImageInput'


export default function ProfileScreen(props) {

  return (
    <Screen style={ styles.container }>
      <ImageInput
        style={styles.image}
        withEditOption={false}
      />
      <InputWithLabel icon="alphabetical" placeholder={initialState.name} type="text" withEditOption={true} />
      <InputWithLabel icon="calendar" placeholder={initialState.dob} type="text" withEditOption={true} />
      <InputWithLabel icon="scale" placeholder={initialState.weight.toString()} type="number" unit="g" withEditOption={true}  />
      <InputWithLabel icon="human-male-height" placeholder={initialState.height.toString()} type="number" unit="cm" withEditOption={true} />
      <InputWithLabel icon="face" placeholder={initialState.head.toString()} type="number" unit="cm" withEditOption={true} />
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: "center"
  },
  text: {
    top: 30,
    fontSize: 20,
    marginTop: 10,
    alignSelf: "flex-start",
  }
});