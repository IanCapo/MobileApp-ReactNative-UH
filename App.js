import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './app/screens/Dashboard';
import MilesStones from './app/screens/MileStones';
import Navigator from './app/navigation/Navigator';


function App() {
  return (
    <NavigationContainer >
      <Navigator />
    </NavigationContainer>
    
  );
}

export default App;