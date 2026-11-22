import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../theme/tokens';

type Props = { label: string; ids: readonly [string, string, string, string] };
export function FeatureRow({ label, ids }: Props) {
  return (
    <View testID={`fid:${ids[0]}`} style={styles.row}>
      <View testID={`fid:${ids[1]}`} style={styles.icon}>
        <View testID={`fid:${ids[2]}`} style={styles.square}>
          <View style={styles.check} />
        </View>
      </View>
      <Text testID={`fid:${ids[3]}`} style={styles.label}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 16, height: 40 },
  icon: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  square: { width: 30, height: 30, backgroundColor: colors.green, borderRadius: 2, alignItems: 'center', justifyContent: 'center' },
  check: { width: 15, height: 9, borderLeftWidth: 2.5, borderBottomWidth: 2.5, borderColor: colors.background, transform: [{ rotate: '-45deg' }], marginTop: -4 },
  label: { fontFamily: fonts.extraBold, fontSize: 32, lineHeight: 38.4, color: colors.green },
});
