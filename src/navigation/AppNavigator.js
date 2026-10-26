import { TopScreen } from '../screens/TopScreen';

/**
 * Navigation is deliberately kept dependency-free while this design contains
 * a single initial destination. Add routes here as further screens arrive.
 */
export function AppNavigator() {
  return <TopScreen />;
}
