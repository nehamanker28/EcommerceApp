import React, {useEffect, useState} from 'react';
import {
    Alert,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {selectContactPhone} from 'react-native-select-contact';
import Button from '../Commons/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import { PermissionStatus } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { addMeeting, removeMeeting, updateMeeting } from '../redux/meetingSlice';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../redux/store';

// import { Icon } from 'react-native-vector-icons/Icon';
type Contact = {
    id: string;
    name: string;
    avatar: string;
    selected: boolean;
  };
  // const [newMeeting, setNewMeeting] = useState({
  //   id: '',
  //   title: '',
  //   status: '',
  //   date: '',
  //   location: '',
  // });
const CreateGroup = () => {
   // const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation();
  const [groupTitle, setGroupTitle] = useState('');
  const [searchText, setSearchText] = useState('');
 // const [contacts, setContacts] = useState([]);
//   const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Chris Rorario',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      selected: false,
    },
    {
      id: '2',
      name: 'Mendel Blomburg',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      selected: false,
    },
    {
      id: '3',
      name: 'Jin Young Fong',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      selected: false,
    },
    {
      id: '4',
      name: 'Adam Christopher',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      selected: false,
    },
    {
      id: '5',
      name: 'Lisa Moranice',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      selected: false,
    },
    {
      id: '6',
      name: 'Ana Michel',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      selected: false,
    },
  ]);
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       ).then(granted => {
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           loadContacts();
//         }
//       });
//     } else {
       
//         checkAndRequestPermission();
//     }
//   }, []);
//   const checkAndRequestPermission = async () => {
//     // Check permission
   
//     let permission : PermissionStatus = await Contacts.checkPermission();
//     console.log('contacts+++++IOS++++++',permission)
//     if (permission === 'undefined' || permission === 'notDetermined') {
//       // Request permission if it hasn't been determined yet
//       permission = await Contacts.requestPermission();
//     }

//     handlePermission(permission);
//   };

//   const handlePermission = (permission: PermissionStatus) => {
//     // console.log('contacts+++++IOS')
//     if (permission === 'authorized') {
//       loadContacts();
//     } else if (permission === 'denied') {
//       Alert.alert(
//         'Permission Denied',
//         'Please enable contact permissions in settings to access contacts.'
//       );
//     }
//   };
//   const loadContacts = () => {
   
//     Contacts.getAll().then(contacts => {
       
//         console.log(contacts)
//       setContacts(contacts);
//     });
//   };
//   const toggleSelectContact = (id: string) => {
//     setSelectedContacts(prev =>
//       prev.includes(id)
//         ? prev.filter(contactId => contactId !== id)
//         : [...prev, id],
//     );
//   };
  const toggleSelection = (id: string) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id
          ? { ...contact, selected: !contact.selected }
          : contact
      )
    );
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const selectedContacts = contacts.filter((contact) => contact.selected);

  return (
    
    <ScrollView>
      <Image source={require('../assests/Header.png')}></Image>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Group</Text>
      </View>
      <View style={styles.container}>
        {/* Group Title Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>GROUP TITLE *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter name of the group"
            placeholderTextColor="#999"
            value={groupTitle}
            onChangeText={setGroupTitle}
          />
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search name or number to add in the group"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        {selectedContacts.length > 0 && (
        <View style={styles.selectedContactsContainer}>
          <FlatList
            horizontal
            data={selectedContacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.selectedContact}>
                <Image source={{ uri: item.avatar }} style={styles.avatarSmall} />
                <TouchableOpacity
                  style={styles.removeIcon}
                  onPress={() => toggleSelection(item.id)}
                >
                  <Icon name="close-circle-sharp" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
        {/* Contact List */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => toggleSelection(item.id)}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.contactName}>{item.name}</Text>
            <Icon
              name={item.selected ? 'checkmark-circle' : 'ellipse-outline'}
              size={24}
              color={item.selected ? '#6a1b9a' : '#999'}
            />
          </TouchableOpacity>
        )}
      />
        {/* <FlatList
          data={contacts}
          keyExtractor={item => item.recordID}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                padding: 10,
                marginVertical: 5,
                borderWidth: 1,
                borderColor: selectedContacts.includes(item.recordID)
                  ? 'green'
                  : '#ccc',
              }}
              onPress={() => toggleSelectContact(item.recordID)}>
              <Text style={{fontSize: 16}}>
                {item.givenName} {item.familyName}
              </Text>
            </TouchableOpacity>
          )}
        /> */}

        <Button text={'Create Group'} onPress={() => 
        {
            // setNewMeeting({
            //     id:'3',
            //     title:groupTitle,
            //     status:'Created',
            //     date:'ef',
            //     location:'anywher'

            //     })
                // dispatch(addMeeting(newMeeting));
            }
                }></Button>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#6a1b9a',
    padding: 16,
    marginTop:-40
  },
  headerTitle: {
    color: '#000',
    fontSize: 25,
    // fontWeight: 'bold',
    marginLeft: 10,
   
  },
  inputContainer: {
    padding: 16,
  },
  label: {
    color: '#6a1b9a',
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
   // marginTop: 10,
   marginBottom:10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedContactsContainer: {
   
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal:20,
    //backgroundColor:'#5477FF33'
   
  },
  selectedContact: {
    position: "relative",
    marginRight: 8,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  removeIcon: {
    position: "absolute",
    //top: -0.5,
    right: -5,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
export default CreateGroup;


