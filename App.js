import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './app/navigation/TabNavigator';

function App() {
  return (
    <React.Fragment>
    <NavigationContainer >
      <TabNavigator />
    </NavigationContainer>
    </React.Fragment>
  );
}

export default App;