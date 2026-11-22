import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { CoverScreen } from '../screens/CoverScreen';

export type RootStackParamList = { Cover: undefined };
const Stack = createNativeStackNavigator<RootStackParamList>();
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/'), 'home-store://'],
  config: { initialRouteName: 'Cover', screens: { Cover: 'cover' } },
};
export function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Cover" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cover" component={CoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
