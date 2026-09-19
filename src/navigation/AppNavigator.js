import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ManageByPakWheelsScreen } from '../screens/ManageByPakWheelsScreen';
const Stack = createNativeStackNavigator();
export function AppNavigator() {
  return <NavigationContainer><Stack.Navigator initialRouteName="ManageByPakWheels" screenOptions={{ headerShown: false }}><Stack.Screen name="ManageByPakWheels" component={ManageByPakWheelsScreen} /></Stack.Navigator></NavigationContainer>;
}
