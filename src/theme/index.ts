import './fonts';
import { Platform } from 'react-native';
export const theme = {
  colors: { background: '#ffffff', text: '#000000', primary: '#1e90ff', input: '#e5f4fe' },
  fontFamily: Platform.select({ ios: 'System', web: 'SF Pro', default: 'sans-serif' }),
  radius: 10,
};
