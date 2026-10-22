import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../theme';

const tabs = [
  { label: 'Home', icon: 'home' },
  { label: 'My Files', icon: 'folder' },
  { label: 'User', icon: 'user' },
  { label: 'Settings', icon: 'settings' },
];

export function BottomBar({ activeTab, onTabChange, onAdd }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        {tabs.map((tab, index) => (
          <Pressable key={tab.label} accessibilityRole="tab" accessibilityState={{ selected: activeTab === tab.label }} onPress={() => onTabChange(tab.label)} style={[styles.tab, index === 2 && styles.rightTabs]}>
            <Feather name={tab.icon} size={19} color={colors.navText} />
            <Text style={styles.label}>{tab.label}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable accessibilityRole="button" accessibilityLabel="Add files" onPress={onAdd} style={styles.add}>
        <Feather name="plus" size={25} color={colors.ink} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 7, right: 7, bottom: 0, height: 85, justifyContent: 'flex-end' },
  bar: { height: 68, backgroundColor: 'rgba(255,255,255,0.94)', borderRadius: 22, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 },
  tab: { width: '25%', height: 60, alignItems: 'center', justifyContent: 'center', gap: 4 },
  rightTabs: { marginLeft: 0 },
  label: { color: colors.navText, fontSize: 11, fontWeight: '500' },
  add: { position: 'absolute', top: 1, alignSelf: 'center', width: 61, height: 61, borderRadius: 31, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.06)', elevation: 5, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
});
