import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../theme';

export function FileRow({ file, onMore }) {
  const Icon = file.type === 'document' ? MaterialCommunityIcons : Feather;
  const iconName = file.type === 'document' ? 'file-document-outline' : file.type === 'image' ? 'image-outline' : 'file-text-outline';

  return (
    <View style={styles.row}>
      <Icon name={iconName} size={25} color={file.type === 'folder' ? colors.purple : colors.purple} />
      <View style={styles.copy}>
        <Text numberOfLines={1} style={styles.title}>{file.name}</Text>
        <Text numberOfLines={1} style={styles.meta}>{file.meta}</Text>
      </View>
      <Pressable accessibilityRole="button" accessibilityLabel={`More actions for ${file.name}`} hitSlop={12} onPress={onMore} style={styles.more}>
        <Feather name="more-vertical" size={22} color={colors.ink} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { height: 82, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.divider },
  copy: { flex: 1, marginLeft: 20, marginRight: 8 },
  title: { color: colors.ink, fontSize: 17, lineHeight: 21, fontWeight: '600' },
  meta: { color: colors.ink, fontSize: 13, lineHeight: 16, marginTop: 5, fontWeight: '500' },
  more: { height: 44, width: 27, alignItems: 'flex-end', justifyContent: 'center' },
});
