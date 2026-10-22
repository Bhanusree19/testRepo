import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../theme';

export function FolderCard({ name, count, onPress }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`Open ${name}`} onPress={onPress} style={styles.card}>
      <View style={styles.preview}>
        <View style={styles.folderIcon}>
          <Feather name="folder" size={28} color={colors.folderAccent} strokeWidth={2.5} />
        </View>
      </View>
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
      <Text style={styles.count}>{count} files</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 173,
  },
  preview: {
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.lavender,
  },
  folderIcon: { marginTop: 45, alignItems: 'center' },
  name: { color: colors.ink, fontSize: 15, fontWeight: '600', lineHeight: 19, marginTop: 8 },
  count: { color: colors.ink, fontSize: 13, fontWeight: '500', lineHeight: 16, marginTop: 4 },
});
