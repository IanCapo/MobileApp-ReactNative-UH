import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utilities/colors';
import Dashboard from '../screens/Dashboard';
import AddScreenHolder from '../screens/AddScreenHolder';
import Settings from '../screens/Settings';
import ProfileForm from '../components/ProfileForm';
import AddButton from "./AddButton";
import DashboardStack from './DashboardStack';


const Tab = createBottomTabNavigator();

export default function Navigator({initialRouteName}) {
  return (
    <Tab.Navigator 
      initialRouteName={initialRouteName} 
      tabBarOptions={{
      showLabel: false
    }}
    >
      <Tab.Screen name="dashboard" component={DashboardStack} options={{
        tabBarIcon: () => 
        <MaterialCommunityIcons name="home" size={30} color={colors.primary} />
      }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreenHolder}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <AddButton onPress={() => navigation.navigate('Add')} />,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          )
        })}
      />
      <Tab.Screen name="Account" component={ProfileForm} options={{
        tabBarIcon: () =>
          <MaterialCommunityIcons name="account" size={30} color={colors.primary} />
      }}
      />
    </Tab.Navigator>
  );
};