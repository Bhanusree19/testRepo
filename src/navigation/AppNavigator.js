import React, {useState} from 'react';
import NotificationsScreen from '../screens/NotificationsScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';

export default function AppNavigator() {
  const [route, setRoute] = useState('Notifications');

  if (route === 'Notifications') {
    return <NotificationsScreen onNavigate={setRoute} onBack={() => setRoute('Home')} />;
  }

  return <PlaceholderScreen routeName={route} onNavigate={setRoute} />;
}
