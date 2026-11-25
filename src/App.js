import { ActivityIndicator, View } from 'react-native';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter: Inter_500Medium });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator /></View>;
  }

  return <AppNavigator />;
}
