import { useState } from 'react';

import { FileStorageHomeScreen } from '../screens/FileStorageHomeScreen';

/**
 * The supplied design contains one destination. This small navigator keeps the
 * selected bottom-tab state in one place and leaves room for future routes
 * without introducing an additional navigation dependency.
 */
export function AppNavigator() {
  const [activeTab, setActiveTab] = useState('Home');

  return <FileStorageHomeScreen activeTab={activeTab} onTabChange={setActiveTab} />;
}
