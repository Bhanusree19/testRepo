import React from 'react';
import { useFonts, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  const [loaded, error] = useFonts({ Manrope_700Bold, Manrope_800ExtraBold });
  if (error) throw error;
  if (!loaded) return null;
  return <AppNavigator />;
}
