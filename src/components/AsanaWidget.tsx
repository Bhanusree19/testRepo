import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { theme } from '../theme';
const fid = (id: number) => `fid:1:${id}`;
function AsanaLogo() {
  return <View testID={fid(1389)} style={styles.logo}>
    <Svg testID={fid(1395)} width={19} height={18} viewBox="0 0 19 18"><Circle cx="9.5" cy="4.5" r="4.2" fill={theme.colors.brand}/><Circle cx="4.4" cy="13.5" r="4.2" fill={theme.colors.brand}/><Circle cx="14.6" cy="13.5" r="4.2" fill={theme.colors.brand}/></Svg>
    <View style={styles.wordmark}>
      {['a', 's', 'a', 'n', 'a'].map((letter, i) => <Text key={i} testID={fid(1394-i)} style={[styles.letter, { width: [13,9,13,11,13][i] }]}>{letter}</Text>)}
    </View>
  </View>;
}
function WidgetIcon({ base, kind }: { base: number; kind: 'create' | 'stickies' | 'import' }) {
  return <View testID={fid(base)} style={styles.icon}>
    <View testID={fid(base+1)} style={styles.icon}>
      {kind === 'create' ? <Svg width={18} height={18} viewBox="0 0 18 18"><Circle testID={fid(1400)} cx="9" cy="9" r="8.5" stroke={theme.colors.icon} fill="none"/><Path testID={fid(1401)} d="M8.5 4.5h1v4h4v1h-4v4h-1v-4h-4v-1h4z" fill={theme.colors.icon}/></Svg> :
      <Svg testID={fid(base+2)} width={16} height={16} viewBox="0 0 16 16">
        <Path d={kind === 'stickies' ? 'M1.5 1.5h13v9l-4 4h-9z M10.5 14.5v-4h4' : 'M8 1v9 M4.5 6.5 8 10l3.5-3.5 M1.5 10v4.5h13V10'} fill="none" stroke={theme.colors.icon} strokeWidth={1.2} strokeLinejoin="round"/>
      </Svg>}
    </View>
  </View>;
}
function WidgetRow({ id, iconId, textId, kind, label }: {id: number; iconId: number; textId: number; kind: 'create'|'stickies'|'import'; label: string}) {
  // The extraction contains no click actions or destinations for these rows.
  return <View testID={fid(id)} style={styles.row}><WidgetIcon base={iconId} kind={kind}/><Text testID={fid(textId)} style={styles.label}>{label}</Text></View>;
}
export function AsanaWidget() {
  return <View testID={fid(1386)} style={styles.widget}>
    <View testID={fid(1387)} style={styles.card}>
      <View testID={fid(1388)} style={styles.header}><AsanaLogo/></View>
      <View testID={fid(1396)} style={styles.section}>
        <WidgetRow id={1397} iconId={1398} textId={1405} kind="create" label="Create new task"/>
        <WidgetRow id={1406} iconId={1407} textId={1412} kind="stickies" label="Turn stickies into tasks"/>
      </View>
      <View testID={fid(1413)} style={styles.divider}/>
      <View testID={fid(1414)} style={styles.section}><WidgetRow id={1415} iconId={1416} textId={1421} kind="import" label="Import a task or project"/></View>
    </View>
  </View>;
}
const styles = StyleSheet.create({
  widget: { width: 360, maxWidth: '100%' },
  card: { borderWidth: 1, borderColor: '#000000', backgroundColor: theme.colors.white, shadowColor: '#000000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  header: { height: 64, backgroundColor: theme.colors.header, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 91, height: 18, flexDirection: 'row', alignItems: 'center', gap: 5 },
  wordmark: { flexDirection: 'row', gap: 2, alignItems: 'center' },
  letter: { color: '#ffffff', fontFamily: theme.font, fontSize: 23, lineHeight: 26, marginTop: -4, letterSpacing: -1 },
  section: { padding: 8 },
  row: { height: 48, padding: 8, flexDirection: 'row', gap: 8, alignItems: 'center' },
  icon: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: theme.font, fontWeight: '500', fontSize: 13, lineHeight: 24, letterSpacing: -0.03, color: '#000000' },
  divider: { height: 1, backgroundColor: '#000000' },
});
