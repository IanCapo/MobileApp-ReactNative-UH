import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../utilities/colors';

import Icon from '../../app/components/Icon'
import ImageWithIcon from './ImageWithIcon';

export default function ImageInput({type, existingImage, onPress }) {
  const [image, setImage] = existingImage ? useState(existingImage.url) : useState(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onPress(result.uri)
    }
  };

  const renderImage = (type) => {
    if (type === 'galery') {
      return <Image source={{ uri: image }} style={ styles.image } />
    }
    else {
      return <ImageWithIcon image={image} style={ styles.image }/>
    }
  }

  return (
    <TouchableWithoutFeedback style={[styles.container]} onPress={pickImage}>
      <View>
        {!image && <Icon name="camera" size={50} color="darkgrey" backgroundColor={colors.primary} /> }
        {image && renderImage(type) }
        </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 20,
  }
});