import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Status from './pages/Status';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
      />
      <Stack.Screen 
        name="Status"
        component={Status}
      />
    </Stack.Navigator>
  )
}