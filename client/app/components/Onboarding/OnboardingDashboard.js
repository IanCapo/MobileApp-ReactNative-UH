import React from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import colors from '../../utilities/colors';

import Screen from '../Screen';
import VerticalLine from '../VerticalLine';

export default function OnboardingDashboard(props) {
  return (
  <Screen style={ styles.container }>
      <Image
        style={styles.image}
        source={require('../../assets/Dashboard.png')} />
        <VerticalLine style={ styles.line } />
        <View style={ styles.description }>
          <Text>
            Welcome to My Baby,
            </Text>
            <Text>
            your little helper when it comes to showing off your little one.
          </Text>
          <Text>
            On the Dashboard you have access to all the screens.
            </Text>
          <Text style={ styles.button }>Swipe left</Text>
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