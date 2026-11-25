import React from 'react';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { AppNavigator } from './src/navigation/AppNavigator';
export default function App() {
  const [loaded, error] = useFonts({ Inter: Inter_500Medium });
  if (error) throw error;
  if (!loaded) return null;
  return <AppNavigator />;
}
