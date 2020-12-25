import React, { useState } from 'react';
import { StyleSheet, Image, Text } from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import ImageInput from '../../app/components/ImageInput'
import Icon from '../components/Icon';

import useApi from '../hooks/useApi';
import usePutData from '../hooks/usePutData';
import colors from '../utilities/colors';


export default function ProfileScreen() {
  const { data, loading, error } = useApi("profile");
  const [editable, setEditable] = useState(false)

  const renderImage = () => {
    if(editable) {
     return (
       <ImageInput
        style={styles.image}
        existingImage={data.image.url}
        onPress={(payload) => changeImageAppearance(payload)}
      />
      )
    } else {
      return (
        <Image
        style={styles.image}
        source={{ uri: data.image.url }}
      />
      )
    }
  }

  const changeImageAppearance = (payload) => {
    usePutData('profile', [{ "key": "image", "value": payload }])
  }

  if (data) {
    return (
      <Screen style={ styles.container }>
        { !editable ? renderImage() : renderImage() }
          <InputWithLabel 
            icon="baby-bottle-outline" 
            placeholder={data.name} 
            type="text" 
            isEditable={editable} 
            withEditOption={editable} />
          <InputWithLabel 
            icon="calendar" 
            placeholder={data.dob} 
            type="text" 
            isEditable={editable} 
            withEditOption={editable} />
          <InputWithLabel 
            icon="scale" 
            placeholder={data.weight.toString()} 
            type="number" 
            unit="g" 
            isEditable={editable} 
            withEditOption={editable} />
          <InputWithLabel 
            icon="human-male-height" 
            placeholder={data.height.toString()} 
            type="number" 
            unit="cm" 
            isEditable={editable} 
            withEditOption={editable} />
          <InputWithLabel 
            icon="face" 
            placeholder={data.head.toString()} 
            type="number" 
            unit="cm" 
            isEditable={editable} 
            withEditOption={editable} />
            {editable && <Icon 
              name="check" 
              size={30} 
              style={styles.iconCheck} 
              onPress={() => console.log('saved pressed')} />}
            {!editable && <Icon 
              name="border-color" 
              size={30} 
              style={styles.iconEdit} 
              onPress={() => setEditable(true)} /> }
      </Screen>
    ); 
  } else if (loading) {
    return (
      <Screen>
        <Text>Loading</Text>
      </Screen>)
  } else if (error) {
    return (
      <Screen>
        <Text>Error</Text>
      </Screen>)
  }
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
  iconEdit: {
    width: 50,
    height: 50,
    paddingTop: 7,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-end",
    backgroundColor: colors.yellow
  },
  iconCheck: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-end",
    backgroundColor: colors.green
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 15,
    marginBottom: 20,
  }
});