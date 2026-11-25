import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { theme } from '../theme';
type Props = TextInputProps & { nodeId: string; labelId: string; fillId: string };
export function AuthField({ nodeId, labelId, fillId, ...props }: Props) {
  return <View testID={`fid:${nodeId}`} style={styles.instance}>
    <View testID={`fid:${fillId}`} style={styles.fill}>
      <Text testID={`fid:${labelId}`} pointerEvents="none" style={[styles.label, !!props.value && styles.hiddenLabel]}>{props.placeholder}</Text>
      <TextInput {...props} placeholder="" style={styles.input} />
    </View>
  </View>;
}
const styles = StyleSheet.create({
  instance: { width: '100%', height: 56 },
  fill: { flex: 1, paddingLeft: 7, paddingTop: 19, borderRadius: theme.radius, backgroundColor: theme.colors.input },
  label: { display: 'flex', width: 81, height: 26, fontFamily: theme.fontFamily, fontSize: 16, fontWeight: 510, lineHeight: 19.09, color: theme.colors.text },
  hiddenLabel: { opacity: 0 },
  input: { ...StyleSheet.absoluteFillObject, paddingHorizontal: 7, paddingTop: 19, paddingBottom: 11, fontFamily: theme.fontFamily, fontSize: 16, fontWeight: 510, lineHeight: 19.09, color: theme.colors.text },
});
