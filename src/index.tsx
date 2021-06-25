import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Setting a timer']);
}

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#E55F40" />
      <Routes />
    </NavigationContainer>
  );
}
