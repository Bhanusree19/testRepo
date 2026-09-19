import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/tokens';

export default function IconButton({icon, label, onPress, style, iconStyle}) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={[styles.hit, style]}>
      <View style={[styles.circle, iconStyle]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {width: 48, height: 48, alignItems: 'center', justifyContent: 'center'},
  circle: {width: 45, height: 45, borderRadius: 23, alignItems: 'center', justifyContent: 'center'},
  icon: {fontFamily: fonts.display, fontSize: 23, lineHeight: 27, color: colors.white},
});
