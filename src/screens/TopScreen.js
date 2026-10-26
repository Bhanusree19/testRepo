import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { BellIcon, IconButton, SearchIcon } from '../components/IconButton';
import { StorageMeter } from '../components/StorageMeter';
import { colors } from '../theme/colors';

export function TopScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Avatar />
          <View style={styles.actions}>
            <IconButton accessibilityLabel="Search"><SearchIcon /></IconButton>
            <View style={styles.notification}>
              <IconButton accessibilityLabel="Notifications"><BellIcon /></IconButton>
              <View style={styles.badge} />
            </View>
          </View>
        </View>
        <StorageMeter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, flex: 1 },
  // The design has a 33pt leading edge and a 15pt trailing edge; the
  // action group itself has a further 16pt inset on the trailing side.
  content: { marginLeft: 33, marginRight: 15, paddingTop: 16 },
  header: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' },
  actions: { alignItems: 'center', flexDirection: 'row', gap: 16, marginRight: 16, marginTop: 11 },
  notification: { height: 32, position: 'relative', width: 32 },
  badge: { backgroundColor: colors.notification, borderColor: colors.background, borderRadius: 4, borderWidth: 1, height: 7, position: 'absolute', right: 1, top: 3, width: 7 },
});
