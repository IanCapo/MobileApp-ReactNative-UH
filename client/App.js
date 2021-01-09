import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './app/navigation/TabNavigator';
import cache from  './app/utilities/cache';
import DashboardStack from './app/navigation/DashboardStack';

function App() {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //cache.removeFew()

  useEffect(() => {
    let mounted = true;
    const cachedData = async () => {
      const data = await cache.getData('user');
      if (data.ok) {
        console.log('is user');
        setUser(true);
      }
    }
    cachedData().then(() => {
      if(mounted) setIsLoading(false)
    })
    return () => {
     mounted = false
    }
  }, [])

  if(!isLoading) {
      return (
      <React.Fragment>
      <NavigationContainer >
       
        { user && <TabNavigator initialRouteName='dashboard' /> }
        { !user && <TabNavigator initialRouteName='Onboarding' /> }
      </NavigationContainer>
      </React.Fragment>
    );
  } else 
   return (
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Loading</Text>
      </View>
   )
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  headline: {
    fontSize: 24,
  },
  headlineContainer: {
    paddingTop: 25,
    width: "100%",
    alignItems:
      "center"
  },
})

export default App;

