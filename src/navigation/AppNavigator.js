import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NotificationScreen} from '../screens/NotificationScreen';
import {colors, fonts} from '../theme';

const labels = {home: 'Home', resources: 'Resources', reminders: 'Notifications', support: 'Support & Help'};

/**
 * The design provides one destination. This small navigator keeps it dependency-free
 * and gives all visible navigation controls a deterministic destination.
 */
export function AppNavigator() {
  const [route, setRoute] = useState('reminders');

  if (route === 'reminders') {
    return <NotificationScreen onNavigate={setRoute} />;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.placeholder}>
        <Text style={styles.title}>{labels[route]}</Text>
        <Text style={styles.copy}>This section is ready for its next screen.</Text>
        <TouchableOpacity accessibilityRole="button" onPress={() => setRoute('reminders')} style={styles.returnButton}>
          <Text style={styles.returnText}>Back to notifications</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: colors.lilac},
  placeholder: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28},
  title: {fontFamily: fonts.body, fontSize: 24, fontWeight: '700', color: colors.purple},
  copy: {marginTop: 10, fontFamily: fonts.body, color: colors.ink},
  returnButton: {marginTop: 26, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 24, backgroundColor: colors.lime},
  returnText: {fontFamily: fonts.display, fontSize: 16, color: colors.ink},
});
