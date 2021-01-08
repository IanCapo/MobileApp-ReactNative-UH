import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../utilities/colors';


export default function Dashboard() {
  const navigation = useNavigation()
  
  return (
  <Screen style={ styles.container }>
    <Text style={ styles.headLine}>My Baby</Text>
      <View style={ styles.row }>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { otherParam: null })} style={ styles.tabContainer}>
          <Icon name="account-badge-horizontal-outline" size={50} color="white" backgroundColor={colors.secondary} />
          <Text style={ styles.title }>Profile</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MileStones')} style={styles.tabContainer}>
          <Icon name="flag-variant" size={50} color="white" backgroundColor={colors.secondary} />
          <Text style={styles.title}>Milestones</Text>
      </TouchableOpacity>
      </View>
      <View style={ styles.row }>
        <TouchableOpacity onPress={() => navigation.navigate('Development')} style={styles.tabContainer}>
          <Icon name="chart-line" size={50} color="white" backgroundColor={colors.secondary} />
          <Text style={styles.title}>Development</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Memories')} style={styles.tabContainer}>
          <Icon name="camera-burst" size={50} color="white" backgroundColor={colors.secondary} />
          <Text style={styles.title}>Memories</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
  }, 
  tabContainer: {
    alignItems: 'center',
  },
  headLine: {
    fontSize: 24
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 40,
  },
  title: {
    marginTop: 5,
  }
});