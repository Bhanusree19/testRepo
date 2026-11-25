import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TryItOutScreen from '../screens/TryItOutScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'tryitout://'],
  config: {
    screens: {
      TryItOut: 'try-it-out',
    },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="TryItOut" screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="TryItOut" component={TryItOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
