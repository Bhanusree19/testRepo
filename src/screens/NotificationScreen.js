import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomNavigation} from '../components/BottomNavigation';
import {NotificationIcon} from '../components/NotificationIcon';
import {colors, fonts} from '../theme';

const reminderGroups = [
  {heading: 'Today', rows: [{title: 'New workout is Available', date: 'June 10 - 10:00 AM', icon: 'star'}]},
  {heading: null, rows: [{title: 'Don’t forget to drink water', date: 'June 10 - 8:00 AM', icon: 'bulb', highlighted: true}]},
  {heading: 'Yesterday', rows: [
    {title: 'Upper Body Workout Completed!', date: 'June 09 - 6:00 pM', icon: 'cup', highlighted: true},
    {title: 'Remember Your Exercise Session', date: 'June 09 - 3:00 pM', icon: 'bulb'},
    {title: 'new Article & Tip posted!', date: 'June 09 - 11:00 aM', icon: 'list'},
  ]},
  {heading: 'May 29 - 20XX', rows: [
    {title: 'You started a new challenge!', date: 'May 29 - 9:00 AM', icon: 'star'},
    {title: 'New House training ideas!', date: 'May 29 - 8:20 AM', icon: 'star'},
  ]},
];

const systemGroups = [{heading: 'Today', rows: [{title: 'Workout reminders are enabled', date: 'June 10 - 9:00 AM', icon: 'star'}]}];

function NotificationRow({item}) {
  return (
    <TouchableOpacity accessibilityRole="button" accessibilityLabel={`${item.title}, ${item.date}`} style={styles.row} activeOpacity={0.75}>
      <NotificationIcon kind={item.icon} highlighted={item.highlighted} />
      <View style={styles.rowCopy}>
        <Text numberOfLines={1} style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function NotificationScreen({onNavigate}) {
  const [filter, setFilter] = useState('Reminders');
  const groups = filter === 'Reminders' ? reminderGroups : systemGroups;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity accessibilityLabel="Go back" accessibilityRole="button" onPress={() => onNavigate('home')} style={styles.back}><Text style={styles.backGlyph}>‹</Text></TouchableOpacity>
          <Text style={styles.screenTitle}>Notifications</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity accessibilityLabel="Search notifications" accessibilityRole="button"><Text style={styles.actionIcon}>⌕</Text></TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Notification settings" accessibilityRole="button"><Text style={styles.actionIcon}>♟</Text></TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Profile" accessibilityRole="button"><Text style={styles.actionIcon}>♙</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.filters}>
          {['Reminders', 'System'].map(name => (
            <TouchableOpacity accessibilityRole="tab" accessibilityState={{selected: filter === name}} key={name} onPress={() => setFilter(name)} style={[styles.filter, filter === name ? styles.filterActive : styles.filterInactive]}>
              <Text style={[styles.filterText, filter === name ? styles.filterTextActive : styles.filterTextInactive]}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          {groups.map((group, index) => (
            <View key={`${group.heading}-${index}`}>
              {group.heading && <Text style={[styles.sectionLabel, index > 0 && styles.sectionSpacing]}>{group.heading}</Text>}
              {group.rows.map(item => <NotificationRow item={item} key={`${item.title}-${item.date}`} />)}
            </View>
          ))}
        </ScrollView>
      </View>
      <BottomNavigation active="reminders" onNavigate={onNavigate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: colors.lilac},
  page: {flex: 1, backgroundColor: colors.lilac},
  header: {height: 76, paddingTop: 24, paddingHorizontal: 32, flexDirection: 'row', alignItems: 'center'},
  back: {width: 18, height: 32, justifyContent: 'center'},
  backGlyph: {fontSize: 35, lineHeight: 35, color: colors.lime, fontWeight: '300'},
  screenTitle: {marginLeft: 14, fontFamily: fonts.body, fontSize: 20, fontWeight: '700', color: colors.purple},
  headerActions: {marginLeft: 'auto', flexDirection: 'row', alignItems: 'center', gap: 18},
  actionIcon: {fontSize: 24, lineHeight: 26, color: colors.purple, fontWeight: '700'},
  filters: {height: 53, paddingHorizontal: 35, flexDirection: 'row', alignItems: 'center', gap: 20},
  filter: {width: 151, height: 29, borderRadius: 19, alignItems: 'center', justifyContent: 'center'},
  filterActive: {backgroundColor: colors.lime},
  filterInactive: {backgroundColor: colors.white},
  filterText: {fontFamily: fonts.display, fontSize: 17},
  filterTextActive: {fontWeight: '500', color: colors.ink},
  filterTextInactive: {fontWeight: '400', color: colors.purple},
  list: {paddingHorizontal: 35, paddingTop: 12, paddingBottom: 16},
  sectionLabel: {marginLeft: 19, marginBottom: 16, fontFamily: fonts.body, fontSize: 12, fontWeight: '500', color: colors.lime},
  sectionSpacing: {marginTop: 13},
  row: {height: 64, marginBottom: 16, paddingLeft: 10, paddingRight: 18, borderRadius: 36, backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center'},
  rowCopy: {marginLeft: 14, flex: 1, justifyContent: 'center'},
  rowTitle: {fontFamily: fonts.body, fontSize: 13, lineHeight: 20, fontWeight: '500', color: colors.ink},
  date: {marginTop: 0, fontFamily: fonts.body, fontSize: 12, lineHeight: 18, fontWeight: '500', color: colors.lilac},
});
