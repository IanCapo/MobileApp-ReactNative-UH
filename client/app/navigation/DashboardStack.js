import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import MileStones from '../screens/MileStones';
import DevelopmentScreen from '../screens/DevelopmentScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Dashboard from '../screens/Dashboard';
import MemoryDetailsScreen from '../screens/MemoryDetailsScreen';
import MilestoneDetailScreen from '../screens/MilestoneDetailScreen';
import AddScreenHolder from '../screens/AddScreenHolder';


const Stack = createStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
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
    <Stack.Screen
      name="MemoryDetail"
      component={MemoryDetailsScreen}
      options={{ 
        headerShown: true,
        title: ''
       }} />
    <Stack.Screen
      name="MilestoneDetail"
      component={MilestoneDetailScreen}
      options={{ 
        headerShown: true,
        title: ''
       }} />
    <Stack.Screen
      name="AfterSubmitOptions"
      component={AddScreenHolder}
      options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default DashboardStack;