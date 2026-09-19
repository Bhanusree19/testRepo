import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, type } from '../theme/tokens';
export function IconButton({ children, onPress, dark, style }) { return <Pressable accessibilityRole="button" onPress={onPress} style={[s.iconButton, dark && s.dark, style]}><Text style={[s.icon, dark && s.light]}>{children}</Text></Pressable>; }
export function SectionTitle({ children, style }) { return <Text style={[s.sectionTitle, style]}>{children}</Text>; }
export function Pill({ children, featured }) { return <View style={[s.pill, featured && s.featured]}><Text style={s.pillText}>{children}</Text></View>; }
export function PrimaryButton({ children, onPress, style }) { return <Pressable accessibilityRole="button" onPress={onPress} style={[s.button, style]}><Text style={s.buttonText}>{children}</Text></Pressable>; }
const s = StyleSheet.create({
  iconButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#FFFFFFCC', alignItems: 'center', justifyContent: 'center' }, dark: { backgroundColor: colors.ink }, icon: { fontSize: 20, color: colors.ink }, light: { color: '#fff', fontSize: 18 }, sectionTitle: { ...type.title, color: '#000' },
  pill: { height: 26, borderRadius: 8, paddingHorizontal: 4, justifyContent: 'center', backgroundColor: colors.chip }, featured: { backgroundColor: colors.featured }, pillText: { ...type.tiny, color: '#000' }, button: { height: 40, borderRadius: 8, backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center' }, buttonText: { ...type.subtitle, color: '#fff' }
});
