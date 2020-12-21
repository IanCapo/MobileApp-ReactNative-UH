import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import initialState from '../../initialState.json';
import ImageInput from '../../app/components/ImageInput'
import Icon from '../components/Icon';


export default function ProfileScreen() {
  const [editable, setEditable] = useState(false)
  const [image, setimage] = useState(initialState.image.url)

  const renderImage = () => {
    if(editable) {
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
  }

  return (
    <Screen style={ styles.container }>
      { !editable ? renderImage() : renderImage() }
      <InputWithLabel 
        icon="baby-bottle-outline" 
        placeholder={initialState.name} 
        type="text" 
        isEditable={editable} 
        withEditOption={true} />
      <InputWithLabel 
        icon="calendar" 
        placeholder={initialState.dob} 
        type="text" 
        isEditable={editable} 
        withEditOption={editable} />
      <InputWithLabel 
        icon="scale" 
        placeholder={initialState.weight.toString()} 
        type="number" 
        unit="g" 
        isEditable={editable} 
        withEditOption={editable} />
      <InputWithLabel 
        icon="human-male-height" 
        placeholder={initialState.height.toString()} 
        type="number" 
        unit="cm" 
        isEditable={editable} 
        withEditOption={editable} />
      <InputWithLabel 
        icon="face" 
        placeholder={initialState.head.toString()} 
        type="number" 
        unit="cm" 
        isEditable={editable} 
        withEditOption={editable} />
      <Icon 
        name="border-color" 
        size={30} 
        style={styles.icon} 
        onPress={() => setEditable(true)} />
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
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 7,
    alignSelf: "flex-end"
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
    marginBottom: 20,
  }
});