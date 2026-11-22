import React from 'react';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import { AppNavigator } from './src/navigation/AppNavigator';
export default function App() {
  const [loaded, error] = useFonts({Roboto_400Regular,Roboto_900Black,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold,Inter_500Medium,Inter_600SemiBold,Lato_700Bold});
  if (error) throw error;
  return loaded ? <AppNavigator /> : null;
}
