import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

const symbols = {star: '★', bulb: '♟', cup: '♜', list: '☷'};

export function NotificationIcon({kind, highlighted = false}) {
  return (
    <View style={[styles.circle, highlighted ? styles.lime : styles.lilac]}>
      {highlighted && <View style={styles.dot} />}
      <Text style={[styles.symbol, highlighted ? styles.dark : styles.light]}>{symbols[kind]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {width: 45, height: 45, borderRadius: 23, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'},
  lime: {backgroundColor: colors.lime},
  lilac: {backgroundColor: colors.lilac},
  symbol: {fontSize: 25, fontWeight: '700', zIndex: 1},
  dark: {color: colors.ink},
  light: {color: colors.white},
  dot: {position: 'absolute', left: 2, top: 2, width: 13, height: 13, borderRadius: 7, backgroundColor: colors.lilac},
});
