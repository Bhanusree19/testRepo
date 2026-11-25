import { StyleSheet, Text, View } from 'react-native';

import WidgetPreview from '../components/WidgetPreview';
import { colors } from '../theme/tokens';

function FigJamIllustration() {
  return (
    <View testID="fid:1:1422" style={styles.illustration}>
      <View style={styles.illustrationTop} />
      <View style={styles.canvasCard}>
        <View style={[styles.sticky, styles.stickyCoral]} />
        <View style={[styles.sticky, styles.stickyYellow]} />
        <View style={[styles.sticky, styles.stickyBlue]} />
        <View style={styles.canvasLine} />
        <View style={[styles.canvasLine, styles.secondLine]} />
      </View>
      <View style={styles.cursor} />
    </View>
  );
}

export default function TryItOutScreen() {
  return (
    <View testID="fid:1:1382" style={styles.root}>
      <View testID="fid:1:1383" style={styles.step}>
        <Text testID="fid:1:1384" style={styles.intro}>
          When you’re ready to start using the widget in your own FigJam files, you can copy and paste the above widget, or search for “Asana” in the  Insert Menu.
        </Text>
        <View testID="fid:1:1385" style={styles.previewRow}>
          <WidgetPreview />
          <FigJamIllustration />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, minWidth: 1209, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' },
  step: { width: 1209, minHeight: 942, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 },
  intro: { width: 1209, height: 168, color: colors.body, fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: 56, letterSpacing: -0.88, textAlign: 'left' },
  previewRow: { width: 937, height: 734, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: 40 },
  illustration: { width: 537, height: 734, overflow: 'hidden', backgroundColor: '#eef4ff' },
  illustrationTop: { height: 64, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#d8e0ee' },
  canvasCard: { position: 'absolute', left: 54, top: 132, width: 430, height: 410, backgroundColor: '#ffffff', borderRadius: 8, borderWidth: 1, borderColor: '#d8e0ee', padding: 35 },
  sticky: { width: 115, height: 100, position: 'absolute', borderRadius: 3 },
  stickyCoral: { left: 44, top: 66, backgroundColor: '#f7a7a0' },
  stickyYellow: { left: 190, top: 115, backgroundColor: '#f9df79' },
  stickyBlue: { left: 285, top: 235, backgroundColor: '#9ec7ff' },
  canvasLine: { position: 'absolute', left: 160, top: 115, width: 58, height: 2, backgroundColor: '#798596', transform: [{ rotate: '22deg' }] },
  secondLine: { left: 273, top: 218, width: 54, transform: [{ rotate: '48deg' }] },
  cursor: { position: 'absolute', left: 320, top: 365, width: 0, height: 0, borderLeftWidth: 12, borderRightWidth: 12, borderBottomWidth: 28, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#303b4c', transform: [{ rotate: '-35deg' }] },
});
