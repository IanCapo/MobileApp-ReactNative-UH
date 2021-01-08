import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

import Screen from '../components/Screen';
import colors from '../utilities/colors';
import Icon  from '../components/Icon';

export default function MemoryDetailsScreen({ navigation, route }) {
  const { key, otherParam } = route.params;
  const index = otherParam.index
  const data = otherParam.data
  const dateArray = data[index].date.split('T')[0].split('-');
  const date = `${dateArray[1]}.${dateArray[2]}.${dateArray[0]}`;

  return (
  <Screen key={key} style={ styles.container }>
      <Image source={{ uri: data[index].image.url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data[index].title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{data[index].description}</Text>
        <View style={ styles.buttonContainer }>
          {index < data.length - 1 && <Icon size={30} name="forward" backgroundColor={colors.white} style={ [styles.buttonRight]} onPress={() => navigation.navigate('MemoryDetail', { key: `SCREEN_${index+1}`, otherParam: {data: data, index: index + 1} })} />}
        </View>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
   buttonRight: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'flex-end'
  },
  buttonContainer: {
    marginTop: 40,
  },
  container: {
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden"
  },
  date: {
    alignSelf: "flex-end",
    top: -16
  },
  detailsContainer: {
    padding: 20,
    height: "100%"
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: 'white',
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20,
  }
});