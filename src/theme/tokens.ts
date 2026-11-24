import { Platform } from 'react-native';

export const tokens = {
  background: '#ffffff',
  text: '#000000',
  secondary: '#8e8e93',
  link: '#007bfe',
  fontFamily: Platform.OS === 'web' ? '"SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif' : Platform.OS === 'ios' ? 'System' : 'sans-serif',
  frameWidth: 800,
  frameHeight: 1392,
};
