import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../theme/tokens';

type Props = { id: string; name: string; width?: number; height?: number; source?: ImageSourcePropType };
// The extraction supplies bounds and borders but no bitmap URLs or image data.
// Keep the image surface unpainted until an original asset can be supplied.
export function PhonePreview({ id, name, width = 245, height = 531, source }: Props) {
  return (
    <View testID={`fid:${id}`} accessibilityLabel={`${name} preview`} style={[styles.frame, { width, height }]}>
      {source && <Image source={source} accessibilityLabel={name} style={styles.image} resizeMode="cover" />}
    </View>
  );
}
const styles = StyleSheet.create({
  frame: { borderColor: colors.phoneBorder, borderWidth: 7, borderRadius: 20, overflow: 'hidden', flexShrink: 0 },
  image: { width: '100%', height: '100%' },
});
