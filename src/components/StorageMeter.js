import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function StorageMeter() {
  return (
    <View style={styles.section}>
      <View style={styles.capacity}>
        <Text style={styles.used}>40</Text>
        <Text style={styles.slash}>/</Text>
        <Text style={styles.total}>100Gb</Text>
      </View>
      <View accessibilityLabel="Storage 40 percent full" style={styles.track}>
        <View style={styles.fill} />
      </View>
      <View style={styles.caption}>
        <View style={styles.databaseIcon}>
          <View style={styles.databaseTop} />
          <View style={styles.databaseLineOne} />
          <View style={styles.databaseLineTwo} />
        </View>
        <Text style={styles.captionText}>Storage 40% full</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 23 },
  capacity: { alignItems: 'baseline', flexDirection: 'row', height: 36 },
  used: { color: colors.text, fontSize: 33, fontWeight: '400', letterSpacing: -1.2, lineHeight: 36 },
  slash: { color: colors.slash, fontSize: 33, fontWeight: '400', lineHeight: 36, marginHorizontal: 3 },
  total: { color: colors.text, fontSize: 33, fontWeight: '400', letterSpacing: -1.3, lineHeight: 36 },
  track: { backgroundColor: colors.track, borderRadius: 100, height: 14, marginTop: 10, overflow: 'hidden', width: '100%' },
  fill: { backgroundColor: colors.progress, borderRadius: 100, height: '100%', width: '40%' },
  caption: { alignItems: 'center', flexDirection: 'row', marginTop: 10 },
  captionText: { color: colors.mutedText, fontSize: 15, fontWeight: '600', lineHeight: 19, marginLeft: 8 },
  databaseIcon: { height: 12, width: 18 },
  databaseTop: { borderColor: colors.mutedText, borderRadius: 50, borderWidth: 1.3, height: 5, left: 0, position: 'absolute', top: 0, width: 18 },
  databaseLineOne: { borderBottomColor: colors.mutedText, borderBottomWidth: 1.3, height: 6, left: 0, position: 'absolute', top: 2, width: 18 },
  databaseLineTwo: { borderBottomColor: colors.mutedText, borderBottomWidth: 1.3, height: 5, left: 0, position: 'absolute', top: 6, width: 18 },
});
