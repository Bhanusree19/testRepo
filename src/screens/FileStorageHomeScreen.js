import { useMemo, useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomBar } from '../components/BottomBar';
import { FileRow } from '../components/FileRow';
import { FolderCard } from '../components/FolderCard';
import { colors } from '../theme';

const folders = [
  { name: 'Cyber Nexus', count: 12 },
  { name: 'Product Development', count: 21 },
  { name: 'Vendor Contracts', count: 122 },
];

const files = [
  { name: 'Flight Booking Confirmation', meta: '3.2 Mb, modified Mar 20, 2023', type: 'file', updated: 20230320 },
  { name: 'CMR Documents', meta: 'Modified Mar 25, 2023', type: 'document', updated: 20230325 },
  { name: 'IMG_92884.png', meta: '267Kb, modified Feb 12, 2023', type: 'image', updated: 20230212 },
  { name: 'Flight Booking Confirmation', meta: '3.2 Mb, modified Mar 20, 2023', type: 'file', updated: 20230320 },
  { name: 'IMG_92884.png', meta: '267Kb, modified Feb 12, 2023', type: 'image', updated: 20230212 },
  { name: 'IMG_92884.png', meta: '267Kb, modified Feb 12, 2023', type: 'image', updated: 20230212 },
];

export function FileStorageHomeScreen({ activeTab, onTabChange }) {
  const [sortDescending, setSortDescending] = useState(true);
  const [menuFile, setMenuFile] = useState(null);
  const orderedFiles = useMemo(() => [...files].sort((a, b) => sortDescending ? b.updated - a.updated : a.updated - b.updated), [sortDescending]);

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.avatar}><Text style={styles.avatarText}>AI</Text></View>
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" accessibilityLabel="Search files" onPress={() => Alert.alert('Search', 'Search is ready for your files.')} style={styles.iconButton}><Feather name="search" size={21} color={colors.background} /></Pressable>
            <Pressable accessibilityRole="button" accessibilityLabel="Notifications" onPress={() => Alert.alert('Notifications', 'You are all caught up.')} style={styles.iconButton}><Feather name="bell" size={21} color={colors.background} /><View style={styles.dot} /></Pressable>
          </View>
        </View>
        <View style={styles.capacity}><Text style={styles.capacityStrong}>40</Text><Text style={styles.capacitySlash}> / </Text><Text style={styles.capacityStrong}>100Gb</Text></View>
        <View style={styles.progressTrack}><View style={styles.progressFill} /></View>
        <View style={styles.storageLine}><MaterialCommunityIcons name="chart-bar" size={18} color={colors.lime} /><Text style={styles.storageLabel}>Storage 40% full</Text></View>
      </View>

      <View style={styles.content}>
        <View style={styles.headingRow}><Text style={styles.heading}>Folders</Text><Pressable onPress={() => Alert.alert('Folders', 'Showing all folders.')}><Text style={styles.seeAll}>See all</Text></Pressable></View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.folderList}>
          {folders.map((folder) => <FolderCard key={folder.name} {...folder} onPress={() => Alert.alert(folder.name, `${folder.count} files in this folder.`)} />)}
        </ScrollView>

        <View style={styles.fileHeading}><Text style={styles.heading}>My Files</Text></View>
        <View style={styles.sortRow}>
          <Pressable accessibilityRole="button" onPress={() => setSortDescending((value) => !value)} style={styles.sortButton}><Text style={styles.sortText}>Last modified</Text><Feather name={sortDescending ? 'chevron-down' : 'chevron-up'} size={17} color={colors.ink} /></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel="Change file view" onPress={() => Alert.alert('View options', 'List view is selected.')} style={styles.viewButton}><Feather name="sliders" size={17} color={colors.ink} /></Pressable>
        </View>
        <ScrollView style={styles.files} contentContainerStyle={styles.filesContent} showsVerticalScrollIndicator={false}>
          {orderedFiles.map((file, index) => <FileRow key={`${file.name}-${index}`} file={file} onMore={() => setMenuFile(file)} />)}
        </ScrollView>
      </View>

      <BottomBar activeTab={activeTab} onTabChange={onTabChange} onAdd={() => Alert.alert('Add files', 'Choose files to upload.')} />
      <Modal transparent animationType="fade" visible={Boolean(menuFile)} onRequestClose={() => setMenuFile(null)}>
        <Pressable style={styles.modalBackdrop} onPress={() => setMenuFile(null)}>
          <Pressable style={styles.menu} onPress={() => undefined}>
            <Text style={styles.menuTitle}>{menuFile?.name}</Text>
            {['Share', 'Rename', 'Delete'].map((action) => <Pressable key={action} style={styles.menuAction} onPress={() => { setMenuFile(null); Alert.alert(action, `${action} action selected.`); }}><Text style={styles.menuActionText}>{action}</Text></Pressable>)}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  hero: { height: 198, paddingTop: 13, backgroundColor: colors.plum, overflow: 'hidden' },
  heroTop: { height: 43, paddingHorizontal: 33, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  avatar: { width: 43, height: 43, borderRadius: 22, backgroundColor: colors.purple, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.background, fontWeight: '800', fontSize: 13 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconButton: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  dot: { position: 'absolute', right: 2, top: 4, width: 7, height: 7, borderRadius: 4, backgroundColor: colors.purple },
  capacity: { flexDirection: 'row', marginTop: 23, marginLeft: 33, alignItems: 'baseline' },
  capacityStrong: { color: colors.background, fontSize: 33, lineHeight: 40, fontWeight: '400' },
  capacitySlash: { color: colors.muted, fontSize: 33, lineHeight: 40 },
  progressTrack: { height: 14, borderRadius: 8, backgroundColor: '#2C2A2D', marginHorizontal: 16, marginTop: 6, overflow: 'hidden' },
  progressFill: { width: '40%', height: '100%', borderRadius: 8, backgroundColor: colors.purple },
  storageLine: { flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 33, gap: 8 },
  storageLabel: { color: colors.mutedLight, fontSize: 15, fontWeight: '600' },
  content: { flex: 1, paddingTop: 27 },
  headingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 },
  heading: { color: colors.ink, fontSize: 22, lineHeight: 28, fontWeight: '700' },
  seeAll: { color: colors.purple, fontSize: 15, fontWeight: '600' },
  folderList: { gap: 8, paddingHorizontal: 32, paddingTop: 21, paddingRight: 48 },
  fileHeading: { marginTop: 31, marginHorizontal: 32 },
  sortRow: { height: 58, marginHorizontal: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sortButton: { height: 32, paddingHorizontal: 17, borderRadius: 16, backgroundColor: '#F6F4F8', flexDirection: 'row', alignItems: 'center', gap: 5 },
  sortText: { color: colors.ink, fontSize: 13, fontWeight: '500' },
  viewButton: { width: 44, height: 32, alignItems: 'center', justifyContent: 'center', borderRadius: 16, backgroundColor: '#F6F4F8' },
  files: { flex: 1 },
  filesContent: { paddingHorizontal: 32, paddingBottom: 115 },
  modalBackdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.35)', padding: 20 },
  menu: { backgroundColor: colors.background, borderRadius: 20, padding: 20 },
  menuTitle: { fontSize: 17, fontWeight: '700', marginBottom: 8 },
  menuAction: { paddingVertical: 13 },
  menuActionText: { fontSize: 16, fontWeight: '500' },
});
