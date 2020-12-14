import React, { useState} from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import initialState from '../../initialState.json';
import ImageInput from '../../app/components/ImageInput'


export default function ProfileScreen() {
  const [firstEntry, setfirstEntry] = useState(false)
  const [image, setimage] = useState(initialState.image.url)

  const renderImage = () => {
    if(firstEntry) {
     return (
       <ImageInput
        style={styles.image}
        existingImage={initialState.image}
        onPress={(payload) => changeImageAppearance(payload)}
      />
      )
    } else {
      return (
        <Image
        style={styles.image}
        source={{ uri: image }}
      />
      )
    }
  }

  const changeImageAppearance = (payload) => {
    setimage(payload);
    setfirstEntry(false)
  }

  return (
    <Screen style={ styles.container }>
      { !firstEntry ? renderImage() : renderImage() }
      <InputWithLabel icon="baby-bottle-outline" placeholder={initialState.name}  type="text" withEditOption={firstEntry} />
      <InputWithLabel icon="calendar" placeholder={initialState.dob} type="text" withEditOption={firstEntry} />
      <InputWithLabel icon="scale" placeholder={initialState.weight.toString()} type="number" unit="g" withEditOption={firstEntry}  />
      <InputWithLabel icon="human-male-height" placeholder={initialState.height.toString()} type="number" unit="cm" withEditOption={firstEntry} />
      <InputWithLabel icon="face" placeholder={initialState.head.toString()} type="number" unit="cm" withEditOption={firstEntry} />
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
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
    marginBottom: 20,
  }
});