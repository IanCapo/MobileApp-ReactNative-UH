import React from 'react';
import {Image, View, StyleSheet, Text } from 'react-native';
import colors from '../../utilities/colors';

import Screen from '../Screen';
import VerticalLine from '../VerticalLine';

export default function OnboardingForms(props) {
  return (
  <Screen style={ styles.container }>
      <Image
        style={styles.image}
        source={require('../../assets/Form.png')} />
        <VerticalLine style={ styles.line } />
        <View style={ styles.description }>
          <Text>
            Via the + button you can add more entries:
            </Text>
            <Text>
            Choose the category and fill out the yellow fields.
          </Text>   
          <Text style={styles.button}>Swipe left</Text>
        </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    color: colors.secondary
  },
  container: {
    flex: 1
  }, 
  description: {
    padding: 30,
    paddingTop: 10
  },
  line: {
    backgroundColor: "grey",
    height: 1,
    width: "100%",
    marginBottom: 20,
    marginTop: 10
  },
  image: {
    width: '58%',
    height: 350,
    flex: 1,
    resizeMode: 'contain',
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  }
});