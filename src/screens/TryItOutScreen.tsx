import React from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { AsanaWidget } from '../components/AsanaWidget';
import { theme } from '../theme';
export function TryItOutScreen() {
  const { width } = useWindowDimensions();
  return <ScrollView testID="fid:1:1382" style={styles.screen} contentContainerStyle={styles.scroll}>
    <View testID="fid:1:1383" style={styles.step}>
      <Text testID="fid:1:1384" style={styles.description}>When you’re ready to start using the widget in your own FigJam files, you can copy and paste the above widget, or search for “Asana” in the  Insert Menu.</Text>
      <View testID="fid:1:1385" style={[styles.examples, width < 937 && styles.stacked]}>
        <AsanaWidget />
        {/* The source only describes image 154's bounds; no image bytes or URL were supplied. */}
        <View testID="fid:1:1422" style={styles.referenceImage} />
      </View>
    </View>
  </ScrollView>;
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  scroll: { alignItems: 'center', minHeight: '100%' },
  step: { width: '100%', maxWidth: 1209, minHeight: 942, alignItems: 'center', gap: 40 },
  description: { width: '100%', fontFamily: theme.font, fontWeight: '500', fontSize: 40, lineHeight: 56, letterSpacing: -0.88, color: theme.colors.text },
  examples: { width: 937, maxWidth: '100%', minHeight: 734, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: 40 },
  stacked: { flexDirection: 'column', alignItems: 'center' },
  referenceImage: { width: 537, maxWidth: '100%', height: 734 },
});
