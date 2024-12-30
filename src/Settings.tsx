

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingTab from '../Commons/SettingsTab';

interface SettingItem {
  id: string;
  icon: string;
  title: string;
  rightText?: string;
}

const Settings = () => {
  const accountInfo = {
    name: 'Mark Adam',
    email: 'Sunny_Koelpin45@hotmail.com',
    avatar:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&w=1080&fit=max',
  };

  const settings: SettingItem[] = [
    { id: '1', icon: 'notifications-outline', title: 'Notification' },
    { id: '2', icon: 'globe-outline', title: 'Language', rightText: 'English' },
    { id: '3', icon: 'lock-closed-outline', title: 'Privacy' },
    { id: '4', icon: 'help-circle-outline', title: 'Help Center' },
    { id: '5', icon: 'information-circle-outline', title: 'About us' },
  ];

  const renderSettingItem = ({ item }: { item: SettingItem }) => (
            <SettingTab iconImg={'check'} text={item.title}/>
   
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.accountContainer}>
          <Image source={require('../assests/profilepic.png')} style={styles.avatar} />
          <View>
            <Text style={styles.accountName}>{accountInfo.name}</Text>
            <Text style={styles.accountEmail}>{accountInfo.email}</Text>
          </View>
          {/* <Icon name="chevron-forward-outline" size={20} color="#333" /> */}
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Setting</Text>
        <FlatList
          data={settings}
          renderItem={renderSettingItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    color: '#000',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  accountEmail: {
    fontSize: 14,
    color: '#666',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
});

export default Settings;
