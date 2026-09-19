import React, {useState} from 'react';
import {Alert, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import IconButton from '../components/IconButton';
import {colors, fonts} from '../theme/tokens';

const groups = [
  {label: 'Today', items: [
    {title: 'New workout is Available', time: 'June 10 - 10:00 AM', icon: '✦', tone: 'purple'},
    {title: 'Don’t forget to drink water', time: 'June 10 - 8:00 AM', icon: '♧', tone: 'lime'},
  ]},
  {label: 'Yesterday', items: [
    {title: 'Upper Body Workout Completed!', time: 'June 09 - 6:00 pM', icon: '♜', tone: 'lime'},
    {title: 'Remember Your Exercise Session', time: 'June 09 - 3:00 pM', icon: '✦', tone: 'purple'},
    {title: 'new Article & Tip posted!', time: 'June 09 - 11:00 aM', icon: '☷', tone: 'purple'},
  ]},
  {label: 'May 29 - 20XX', items: [
    {title: 'You started a new challenge!', time: 'May 29 - 9:00 AM', icon: '★', tone: 'purple'},
    {title: 'New House training ideas!', time: 'May 29 - 8:20 AM', icon: '★', tone: 'purple'},
  ]},
];

function NotificationRow({item}) {
  const isLime = item.tone === 'lime';
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={item.title} onPress={() => Alert.alert(item.title, item.time)} style={styles.row}>
      <IconButton icon={item.icon} label={`${item.title} icon`} style={styles.rowIcon} iconStyle={[styles.notificationIcon, {backgroundColor: isLime ? colors.lime : colors.canvas}]} />
      <View style={styles.rowCopy}>
        <Text numberOfLines={1} style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.rowTime}>{item.time}</Text>
      </View>
    </Pressable>
  );
}

export default function NotificationsScreen({onNavigate, onBack}) {
  const [filter, setFilter] = useState('Reminders');
  const systemActive = filter === 'System';

  return (
    <View style={styles.screen}>
      <View style={styles.statusSpacer} />
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="Go back" onPress={onBack} hitSlop={12} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>
        <Text style={styles.heading}>Notifications</Text>
        <View style={styles.headerActions}>
          <Pressable accessibilityRole="button" accessibilityLabel="Search notifications" onPress={() => Alert.alert('Search', 'Search notifications')}><Text style={styles.headerIcon}>⌕</Text></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel="Open notifications" onPress={() => onNavigate('Notifications')}><Text style={styles.headerIcon}>♢</Text></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel="Profile" onPress={() => onNavigate('Home')}><Text style={styles.headerIcon}>♙</Text></Pressable>
        </View>
      </View>
      <View style={styles.filters}>
        {['Reminders', 'System'].map(option => {
          const selected = filter === option;
          return <Pressable key={option} accessibilityRole="tab" accessibilityState={{selected}} onPress={() => setFilter(option)} style={[styles.filter, selected ? styles.filterSelected : styles.filterIdle]}><Text style={[styles.filterText, selected ? styles.filterSelectedText : styles.filterIdleText]}>{option}</Text></Pressable>;
        })}
      </View>
      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {systemActive ? <View style={styles.empty}><Text style={styles.emptyText}>You’re all caught up.</Text></View> : groups.map(group => (
          <View key={group.label} style={styles.group}>
            <Text style={styles.groupTitle}>{group.label}</Text>
            {group.items.map(item => <NotificationRow item={item} key={item.title} />)}
          </View>
        ))}
      </ScrollView>
      <BottomNavigation activeRoute="Notifications" onNavigate={onNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: colors.canvas},
  statusSpacer: {height: 24, backgroundColor: colors.primary},
  header: {height: 76, paddingHorizontal: 34, flexDirection: 'row', alignItems: 'center'},
  back: {width: 18, marginRight: 11, paddingVertical: 8},
  backText: {fontFamily: fonts.body, fontSize: 28, lineHeight: 28, color: colors.lime},
  heading: {fontFamily: fonts.body, fontSize: 20, fontWeight: '700', color: colors.primary, flex: 1},
  headerActions: {flexDirection: 'row', width: 95, justifyContent: 'space-between', alignItems: 'center'},
  headerIcon: {fontFamily: fonts.display, fontSize: 25, color: colors.primary},
  filters: {height: 43, paddingHorizontal: 35, flexDirection: 'row', justifyContent: 'space-between'},
  filter: {width: 151, height: 29, borderRadius: 38, alignItems: 'center', justifyContent: 'center'},
  filterSelected: {backgroundColor: colors.lime},
  filterIdle: {backgroundColor: colors.white},
  filterText: {fontFamily: fonts.display, fontSize: 17, lineHeight: 20},
  filterSelectedText: {fontWeight: '500', color: colors.ink},
  filterIdleText: {color: colors.primary},
  list: {paddingHorizontal: 35, paddingTop: 3, paddingBottom: 14},
  group: {marginBottom: 10},
  groupTitle: {fontFamily: fonts.body, fontSize: 12, fontWeight: '500', color: colors.lime, marginLeft: 19, marginBottom: 8},
  row: {height: 64, backgroundColor: colors.white, borderRadius: 36, marginBottom: 7, justifyContent: 'center'},
  rowIcon: {position: 'absolute', left: -2, top: 9},
  notificationIcon: {width: 45, height: 45},
  rowCopy: {marginLeft: 69, marginRight: 16},
  rowTitle: {fontFamily: fonts.body, fontSize: 13, fontWeight: '500', lineHeight: 20, color: colors.ink},
  rowTime: {fontFamily: fonts.body, fontSize: 12, fontWeight: '500', lineHeight: 18, color: colors.canvas},
  empty: {height: 160, justifyContent: 'center', alignItems: 'center'},
  emptyText: {fontFamily: fonts.body, fontSize: 14, color: colors.ink},
});
