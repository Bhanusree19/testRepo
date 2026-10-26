import { StyleSheet, Text, View } from 'react-native';

export function Avatar() {
  return (
    <View accessibilityLabel="AI profile" style={styles.avatar}>
      <View style={styles.inner}>
        <Text style={styles.label}>AI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 21.5,
    height: 43,
    justifyContent: 'center',
    width: 43,
  },
  inner: {
    alignItems: 'center',
    backgroundColor: '#4C2C70',
    borderRadius: 16,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  label: { color: '#FFFFFF', fontSize: 12, fontWeight: '800', letterSpacing: -0.5 },
});
