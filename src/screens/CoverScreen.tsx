import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { FeatureRow } from '../components/FeatureRow';
import { PhonePreview } from '../components/PhonePreview';
import { colors, fonts } from '../theme/tokens';

export function CoverScreen() {
  const { width } = useWindowDimensions();
  // Source coordinates are page-space. The frame origin is (-158, -215).
  // Preserve its intentional overflow at 1600px; reflow the content on phones.
  const compact = width < 1000;
  return (
    <View testID="fid:310:234" style={[styles.screen, compact && styles.compactScreen]}>
      <View style={[styles.composition, compact && styles.compactComposition]}>
        <View style={[styles.previews, compact && styles.compactPreviews]}>
          <View style={styles.firstColumn}>
            <PhonePreview id="1017:706" name="Onboarding 1" width={246} />
            <PhonePreview id="1017:714" name="Splash Screen" />
            <PhonePreview id="1017:713" name="Login" />
          </View>
          <View style={styles.secondColumn}>
            <PhonePreview id="1017:709" name="Home" />
            <PhonePreview id="1017:710" name="My Account" />
          </View>
          <View style={styles.thirdColumn}>
            <PhonePreview id="1017:708" name="Cart" />
            <PhonePreview id="1017:707" name="Product Detail" width={246} height={532} />
          </View>
        </View>
        <View testID="fid:310:245" style={[styles.content, compact && styles.compactContent]}>
          <Text testID="fid:310:235" style={[styles.heading, compact && styles.compactHeading]}>Home Store Mobile App UI Kit</Text>
          <View testID="fid:1017:704" style={styles.badge}>
            <Text testID="fid:1017:705" style={styles.badgeLabel}>10 Screens</Text>
          </View>
          <View testID="fid:1032:606" style={styles.features}>
            <FeatureRow label="Full Customizable" ids={['1032:601', '1032:604', '1032:605', '1032:603']} />
            <FeatureRow label="Style Guide" ids={['1032:611', '1032:612', '1032:613', '1032:614']} />
            <FeatureRow label="Figma Components" ids={['1032:615', '1032:616', '1032:617', '1032:618']} />
            <FeatureRow label="Well Organized Layout" ids={['1032:619', '1032:620', '1032:621', '1032:622']} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, minHeight: 960, backgroundColor: colors.background, overflow: 'hidden' },
  composition: { flexDirection: 'row', paddingLeft: 788, alignItems: 'flex-start' },
  previews: { flexDirection: 'row', gap: 26, width: 790, flexShrink: 0 },
  firstColumn: { width: 246, marginTop: -222, gap: 26 },
  secondColumn: { width: 246, marginTop: 59, gap: 27 },
  thirdColumn: { width: 246, marginTop: -164, gap: 26 },
  content: { width: 604, flexShrink: 0, marginLeft: -124, marginTop: 59, gap: 44 },
  heading: { height: 345, fontFamily: fonts.extraBold, fontSize: 96, lineHeight: 115.2, color: colors.green },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.green, borderRadius: 76, paddingHorizontal: 40, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  badgeLabel: { fontFamily: fonts.bold, fontSize: 48, lineHeight: 65.57, color: colors.white },
  features: { gap: 16 },
  compactScreen: { minHeight: 960 },
  compactComposition: { paddingLeft: 24, paddingRight: 24, flexDirection: 'column' },
  compactContent: { width: '100%', marginLeft: 0, marginTop: 40 },
  compactHeading: { fontSize: 56, lineHeight: 67.2, height: 'auto' },
  compactPreviews: { display: 'none' },
});
