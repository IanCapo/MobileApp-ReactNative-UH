import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './app/navigation/TabNavigator';
import cache from  './app/utilities/cache';

function App() {
 //cache.removeFew()
  return (
    <React.Fragment>
    <NavigationContainer >
      <TabNavigator />
    </NavigationContainer>
    </React.Fragment>
  );
}

export default App;