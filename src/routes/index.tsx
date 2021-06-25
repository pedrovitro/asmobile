import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Agenda } from '../screens/Agenda';
import { Detail } from '../screens/Detail';

const StackNavigator = createStackNavigator();

export function Routes() {
  return (
    <StackNavigator.Navigator headerMode="none">
      <StackNavigator.Screen name="Agenda" component={Agenda} />
      <StackNavigator.Screen name="Detail" component={Detail} />
    </StackNavigator.Navigator>
  );
}
