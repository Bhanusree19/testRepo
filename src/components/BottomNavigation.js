import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme';

const items = [
  {key: 'home', icon: '⌂', label: 'Home'},
  {key: 'resources', icon: '▣', label: 'Resources'},
  {key: 'reminders', icon: '✦', label: 'Notifications'},
  {key: 'support', icon: '?', label: 'Support'},
];

export function BottomNavigation({active, onNavigate}) {
  return (
    <View style={styles.wrap}>
      {items.map(item => (
        <TouchableOpacity
          accessibilityLabel={item.label}
          accessibilityRole="tab"
          accessibilityState={{selected: active === item.key}}
          key={item.key}
          onPress={() => onNavigate(item.key)}
          style={styles.item}>
          <Text style={[styles.icon, active === item.key && styles.active]}>{item.icon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {height: 59, backgroundColor: colors.lilac, borderTopWidth: 1, borderTopColor: colors.divider, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'},
  item: {width: 64, height: 58, alignItems: 'center', justifyContent: 'center'},
  icon: {color: colors.white, fontSize: 28, fontWeight: '700', lineHeight: 32},
  active: {color: colors.purple},
});
