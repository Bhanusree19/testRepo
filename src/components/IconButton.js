import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

export function IconButton({ accessibilityLabel, children, onPress, style }) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      hitSlop={8}
      onPress={onPress}
      style={[styles.button, style]}
    >
      {children}
    </Pressable>
  );
}

export function SearchIcon() {
  return (
    <View style={styles.searchIcon}>
      <View style={styles.searchGlass} />
      <View style={styles.searchHandle} />
    </View>
  );
}

export function BellIcon() {
  return (
    <View style={styles.bellIcon}>
      <View style={styles.bellBody} />
      <View style={styles.bellClapper} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', height: 32, justifyContent: 'center', width: 32 },
  searchIcon: { height: 18, width: 18 },
  searchGlass: {
    borderColor: colors.text,
    borderRadius: 20,
    borderWidth: 1.75,
    height: 11,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 11,
  },
  searchHandle: {
    backgroundColor: colors.text,
    borderRadius: 2,
    height: 1.75,
    left: 10,
    position: 'absolute',
    top: 12,
    transform: [{ rotate: '45deg' }],
    width: 8,
  },
  bellIcon: { height: 19, width: 17 },
  bellBody: {
    borderColor: colors.text,
    borderRadius: 9,
    borderWidth: 1.5,
    height: 15,
    left: 1,
    position: 'absolute',
    top: 0,
    width: 15,
  },
  bellClapper: {
    backgroundColor: colors.text,
    borderRadius: 3,
    bottom: 0,
    height: 2.5,
    left: 6,
    position: 'absolute',
    width: 5,
  },
});
