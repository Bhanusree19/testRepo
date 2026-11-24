import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';

export type RootStackParamList = { Welcome: undefined };
const Stack = createNativeStackNavigator<RootStackParamList>();
const linking = {
  prefixes: ['welcome-ui-kit://'],
  config: { screens: { Welcome: 'welcome' } },
};

export function AppNavigator() {
  return (
    <NavigationContainer linking={linking} theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: '#ffffff' } }}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: '📘 Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
