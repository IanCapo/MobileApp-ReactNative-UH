import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utilities/colors';
import Dashboard from '../screens/Dashboard';
import MileStones from '../screens/MileStones';
import Settings from '../screens/Settings';
import AddButton from "./AddButton";

const Tab = createBottomTabNavigator();

export default function Navigator(props) {

  return (
    <Tab.Navigator 
      initialRouteName={Dashboard} 
      tabBarOptions={{
      showLabel: false
    }}
    >
      <Tab.Screen name="dashboard" component={Dashboard} options={{
        tabBarIcon: () => 
        <MaterialCommunityIcons name="home" size={30} color={colors.primary} />
      }}
      />
      <Tab.Screen
        name="Add"
        component={Dashboard}
        options={() => ({
          tabBarButton: () =>
            <AddButton onPress={() => console.log('add clicked')} />,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          )
        })}
      />
      <Tab.Screen name="settings" component={Settings} options={{
        tabBarIcon: () =>
          <MaterialCommunityIcons name="settings" size={30} color={colors.primary} />
      }}
      />
    </Tab.Navigator>
  );
};