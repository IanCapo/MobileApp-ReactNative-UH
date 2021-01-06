import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import Screen from '../../app/components/Screen'
import InputWithLabel from '../components/InputWithLabel';
import ImageInput from '../../app/components/ImageInput'

import usePutData from '../hooks/usePutData';
import colors from '../utilities/colors';
import cache from '../utilities/cache';


export default function ProfileScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [editable, setEditable] = useState(false); 
  const [myData, setMyData] = useState()

 useEffect(() => {
   const cachedData = async () => {
     const data = await cache.getData('profile')
     setMyData(JSON.parse(data.data));
     setIsLoading(false)
   }
   cachedData()
 }, []);
  
  const renderImage = () => {
    if(editable) {
     return (
       <ImageInput
        style={styles.image}
        existingImage={myData.image.url}
        onPress={(payload) => changeImageAppearance(payload)}
      />
      )
    } else {
      return (
        <Image
        style={styles.image}
        source={{ uri: myData.image.url }}
      />
      )
    }
  }

  const changeImageAppearance = (payload) => {
    usePutData('profile', [{ "key": "image", "value": payload }])
  }

  if ( myData ) {
    const dateArray = myData.dob.split('T')[0].split('-');
    const date = `${dateArray[1]}.${dateArray[2]}.${dateArray[0]}`
    return (
      <Screen style={ styles.container }>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>Welcome to this world, {myData.name}!</Text>
        </View>
        { !editable ? renderImage() : renderImage() }
          
          <InputWithLabel 
            icon="calendar" 
            placeholder={date} 
            type="text" 
          />
          <InputWithLabel 
            icon="scale" 
            placeholder={myData.weight.toString()} 
            type="number" 
            unit="g" 
           />
          <InputWithLabel 
            icon="human-male-height" 
            placeholder={myData.length.toString()} 
            type="number" 
            unit="cm" 
         />
          <InputWithLabel 
            icon="face" 
            placeholder={myData.sex} 
            type="text" 
             />
      </Screen>
    ); 
  } else if ( isLoading ) {
    return (
      <Screen style={ styles.container }>
        <Text>No data yet, come back later</Text>
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
  headline: {
    fontSize: 24,
    textAlign: 'center'
  },
  headlineContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20
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