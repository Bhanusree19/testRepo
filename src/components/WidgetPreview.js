import { StyleSheet, Text, View } from 'react-native';

import { colors, shadows } from '../theme/tokens';

function AsanaMark() {
  return (
    <View testID="fid:1:1389" style={styles.brand}>
      <View testID="fid:1:1395" style={styles.asanaSymbol}>
        <View style={[styles.symbolDot, { left: 0, top: 0 }]} />
        <View style={[styles.symbolDot, { left: 10, top: 0 }]} />
        <View style={[styles.symbolDot, { left: 5, top: 9 }]} />
      </View>
      <View style={styles.wordmark}>
        <Text testID="fid:1:1394" style={styles.wordmarkLetter}>a</Text>
        <Text testID="fid:1:1393" style={styles.wordmarkLetter}>s</Text>
        <Text testID="fid:1:1392" style={styles.wordmarkLetter}>a</Text>
        <Text testID="fid:1:1391" style={styles.wordmarkLetter}>n</Text>
        <Text testID="fid:1:1390" style={styles.wordmarkLetter}>a</Text>
      </View>
    </View>
  );
}

function TaskIcon({ type, testID, iconInnerId }) {
  if (type === 'plus') {
    return <View testID={iconInnerId} style={styles.iconInner}><View testID={testID} style={styles.plusIcon}><View testID="fid:1:1401" style={styles.plusHorizontal} /><View style={styles.plusVertical} /></View></View>;
  }
  if (type === 'stickies') {
    return <View testID={iconInnerId} style={styles.iconInner}><View testID={testID} style={styles.stickyIcon}><View style={styles.stickyFold} /></View></View>;
  }
  return <View testID={iconInnerId} style={styles.iconInner}><View testID={testID} style={styles.importIcon}><View style={styles.importArrow} /></View></View>;
}

function ActionRow({ rowId, iconFrameId, iconInnerId, iconId, labelId, label, type }) {
  return (
    <View testID={rowId} style={styles.actionRow}>
      <View testID={iconFrameId} style={styles.iconFrame}>
        <TaskIcon testID={iconId} iconInnerId={iconInnerId} type={type} />
      </View>
      <Text testID={labelId} style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

export default function WidgetPreview() {
  return (
    <View testID="fid:1:1386" style={styles.widgetAnchor}>
      <View testID="fid:1:1387" style={styles.widget}>
        <View testID="fid:1:1388" style={styles.header}><AsanaMark /></View>
        <View testID="fid:1:1396" style={styles.actionGroup}>
          <ActionRow rowId="fid:1:1397" iconFrameId="fid:1:1398" iconInnerId="fid:1:1399" iconId="fid:1:1400" labelId="fid:1:1405" label="Create new task" type="plus" />
          <ActionRow rowId="fid:1:1406" iconFrameId="fid:1:1407" iconInnerId="fid:1:1408" iconId="fid:1:1409" labelId="fid:1:1412" label="Turn stickies into tasks" type="stickies" />
        </View>
        <View testID="fid:1:1413" style={styles.divider} />
        <View testID="fid:1:1414" style={styles.importGroup}>
          <ActionRow rowId="fid:1:1415" iconFrameId="fid:1:1416" iconInnerId="fid:1:1417" iconId="fid:1:1418" labelId="fid:1:1421" label="Import a task or project" type="import" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  widgetAnchor: { width: 360, height: 241 },
  widget: { width: 360, height: 241, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.ink, ...shadows.widget },
  header: { width: 360, height: 64, marginTop: -1, marginHorizontal: -1, backgroundColor: colors.widgetHeader, justifyContent: 'center', alignItems: 'center' },
  brand: { width: 91, height: 18, position: 'relative' },
  asanaSymbol: { position: 'absolute', left: 0, top: 0, width: 19, height: 18 },
  symbolDot: { position: 'absolute', width: 9, height: 9, borderRadius: 5, backgroundColor: colors.coral },
  wordmark: { position: 'absolute', left: 24, top: 0, flexDirection: 'row', alignItems: 'center', height: 18 },
  wordmarkLetter: { color: colors.white, fontFamily: 'Inter', fontSize: 14, fontWeight: '500', lineHeight: 18, letterSpacing: -0.5 },
  actionGroup: { width: 360, height: 112, marginHorizontal: -1, padding: 8 },
  importGroup: { width: 360, height: 64, marginHorizontal: -1, padding: 8 },
  actionRow: { width: 344, height: 48, padding: 8, flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconFrame: { width: 32, height: 32 },
  iconInner: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  actionLabel: { color: colors.ink, fontFamily: 'Inter', fontSize: 13, fontWeight: '500', lineHeight: 24, letterSpacing: -0.03 },
  divider: { width: 360, height: 1, marginHorizontal: -1, backgroundColor: colors.ink },
  plusIcon: { width: 18, height: 18, borderWidth: 1.5, borderColor: colors.widgetIcon, borderRadius: 9 },
  plusHorizontal: { position: 'absolute', top: 7, left: 3, width: 10, height: 1.5, backgroundColor: colors.widgetIcon },
  plusVertical: { position: 'absolute', top: 3, left: 7, width: 1.5, height: 10, backgroundColor: colors.widgetIcon },
  stickyIcon: { width: 16, height: 16, backgroundColor: colors.widgetIcon, borderRadius: 1 },
  stickyFold: { position: 'absolute', right: 0, bottom: 0, width: 5, height: 5, borderTopWidth: 5, borderLeftWidth: 5, borderTopColor: 'transparent', borderLeftColor: 'rgba(255,255,255,0.65)' },
  importIcon: { width: 16, height: 16, borderWidth: 1.5, borderColor: colors.widgetIcon, borderRadius: 2, alignItems: 'center' },
  importArrow: { width: 1.5, height: 9, backgroundColor: colors.widgetIcon, marginTop: -4 },
});
