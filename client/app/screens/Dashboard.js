import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Icon from '../components/Icon';

import Screen from '../components/Screen';
import colors from '../utilities/colors';


export default function Dashboard() {
  const navigation = useNavigation()
  return (

  <Screen style={ styles.container }>
      <View style={ styles.row }>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { otherParam: null })}>
          <Icon name="account-badge-horizontal-outline" size={50} color="white" backgroundColor={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MileStones')}>
          <Icon name="heart-multiple-outline" size={50} color="white" backgroundColor={colors.secondary} />
      </TouchableOpacity>
      </View>
      <View style={ styles.row }>
        <TouchableOpacity onPress={() => navigation.navigate('Development')}>
          <Icon name="chart-line" size={50} color="white" backgroundColor={colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Memories')}>
          <Icon name="airballoon" size={50} color="white" backgroundColor={colors.secondary} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }, 
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 40,
  }
});