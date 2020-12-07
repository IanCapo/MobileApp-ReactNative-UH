import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './app/components/Screen';
import Dashboard from "./app/screens/Dashboard";

export default function App() {
  return (
    <React.Fragment>
      <Dashboard>
      </Dashboard>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
