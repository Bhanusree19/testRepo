import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelScreen } from '../screens/TravelScreen';
const Stack = createStackNavigator();
export function AppNavigator() {
  return <NavigationContainer linking={{prefixes:[],config:{screens:{Travel:'travel-screen-2'}}}}>
    <Stack.Navigator initialRouteName="Travel" screenOptions={{headerShown:false,cardStyle:{backgroundColor:'#fff'}}}>
      <Stack.Screen name="Travel" component={TravelScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
