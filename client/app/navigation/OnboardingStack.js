import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OnboardingDashboard from '../components/Onboarding/OnboardingDashboard';
import OnboardingForms from '../components/Onboarding/OnboardingForms';
import OnboardingOverview from '../components/Onboarding/OnboardingOverview';
import ProfileForm from "../components/ProfileForm";


const Tab = createMaterialTopTabNavigator();

const OnboardingStack = () => (
  <Tab.Navigator 
    initialRouteName="1" 
    screenOptions={{ tabBarIcon: () => <MaterialCommunityIcons /> }}
    style={{ marginTop: 20}}
    tabBarOptions={{ 
      showIcon: true,
      showLabel: false
    }}>
    <Tab.Screen 
      name="1" 
      component={OnboardingDashboard}
      options={{
        headerStyle: {
          backgroundColor: '#d8d8d8', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={20} />,
      }}
    />
    <Tab.Screen
      name="2"
      component={OnboardingForms}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="plus-circle" size={20} />,
      }}
      />
    <Tab.Screen
      name="3"
      component={OnboardingOverview}
      options={{
        headerStyle: {
          backgroundColor: '#d8d8d8', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        tabBarIcon: () => <MaterialCommunityIcons name="eye" size={20} />,
      }}
       />
      
    <Tab.Screen
      name="4"
      component={ProfileForm}
      options={{
        headerStyle: {
          backgroundColor: '#d8d8d8', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        tabBarIcon: () => <MaterialCommunityIcons name="account" size={20} />,
      }}
       />
  </Tab.Navigator>
)

export default OnboardingStack;