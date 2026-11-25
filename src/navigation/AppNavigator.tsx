import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
export type RootStackParamList = { Login: undefined };
const Stack = createNativeStackNavigator<RootStackParamList>();
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['testrepo://'], config: { screens: { Login: 'login' } },
};
export function AppNavigator() {
  return <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#ffffff' } }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
