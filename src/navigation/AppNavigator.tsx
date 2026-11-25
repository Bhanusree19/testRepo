import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TryItOutScreen } from '../screens/TryItOutScreen';
export type RootStackParamList = { 'Try it out': undefined };
const Stack = createNativeStackNavigator<RootStackParamList>();
export function AppNavigator() {
  return <NavigationContainer linking={{ prefixes: ['try-it-out://'], config: { screens: { 'Try it out': 'try-it-out' } } }}>
    <Stack.Navigator initialRouteName="Try it out" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#ffffff' } }}>
      <Stack.Screen name="Try it out" component={TryItOutScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
