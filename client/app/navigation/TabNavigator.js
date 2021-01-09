import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utilities/colors';
import AddScreen from '../screens/AddScreen';
import AddButton from "./AddButton";
import DashboardStack from './DashboardStack';
import OnboardingStack from './OnboardingStack';


const Tab = createBottomTabNavigator();

export default function Navigator({initialRouteName}) {
  return (
    <Tab.Navigator 
      initialRouteName={initialRouteName} 
      tabBarOptions={{
      showLabel: false,
    }}
    >
      <Tab.Screen name="dashboard" component={DashboardStack} options={{
        tabBarIcon: () => 
        <MaterialCommunityIcons name="home" size={30} color={colors.primary} />
      }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
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
      <Tab.Screen name="Onboarding" component={OnboardingStack} options={{
        tabBarIcon: () =>
          <MaterialCommunityIcons name="help-circle-outline" size={35} color={colors.primary} />
      }}
      />
    </Tab.Navigator>
  );
};