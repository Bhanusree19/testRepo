import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/tokens';

const tabs = [
  {key: 'Home', icon: '⌂'},
  {key: 'Resources', icon: '▤'},
  {key: 'Challenges', icon: '✦'},
  {key: 'Help', icon: '?'},
];

export default function BottomNavigation({activeRoute, onNavigate}) {
  return (
    <View style={styles.bar} accessibilityRole="tablist">
      {tabs.map(tab => (
        <Pressable
          accessibilityRole="tab"
          accessibilityState={{selected: activeRoute === tab.key}}
          accessibilityLabel={tab.key}
          key={tab.key}
          onPress={() => onNavigate(tab.key)}
          style={styles.tab}>
          <Text style={[styles.icon, activeRoute === tab.key && styles.active]}>{tab.icon}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {height: 59, backgroundColor: colors.canvas, borderTopWidth: 1, borderTopColor: '#7C57FF', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'},
  tab: {height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'},
  icon: {fontFamily: fonts.display, color: colors.white, fontSize: 28, lineHeight: 30},
  active: {color: colors.primary},
});
