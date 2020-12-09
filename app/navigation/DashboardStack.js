import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import MileStones from '../screens/MileStones';
import DevelopmentScreen from '../screens/DevelopmentScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Dashboard from '../screens/Dashboard';


const Stack = createStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }} />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }} />
    <Stack.Screen
      name="MileStones"
      component={MileStones} />
    <Stack.Screen
      name="Development"
      component={DevelopmentScreen} />
    <Stack.Screen
      name="Memories"
      component={MemoriesScreen} />
  </Stack.Navigator>
)

export default DashboardStack;