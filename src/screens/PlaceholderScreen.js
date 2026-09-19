import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import {colors, fonts} from '../theme/tokens';

export default function PlaceholderScreen({routeName, onNavigate}) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>{routeName}</Text>
        <Text style={styles.copy}>This section is ready for your workout journey.</Text>
        <Pressable accessibilityRole="button" onPress={() => onNavigate('Notifications')} style={styles.button}>
          <Text style={styles.buttonText}>View notifications</Text>
        </Pressable>
      </View>
      <BottomNavigation activeRoute={routeName} onNavigate={onNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: colors.canvas},
  content: {flex: 1, padding: 34, paddingTop: 88},
  title: {fontFamily: fonts.body, fontSize: 28, fontWeight: '700', color: colors.primary},
  copy: {fontFamily: fonts.body, fontSize: 14, color: colors.ink, marginTop: 12},
  button: {marginTop: 26, alignSelf: 'flex-start', backgroundColor: colors.lime, borderRadius: 22, paddingHorizontal: 18, paddingVertical: 11},
  buttonText: {fontFamily: fonts.display, fontSize: 16, color: colors.ink},
});
