// import React from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../redux/store';
// import CartScreen from './CartScreen';

// const HomeScreen = () => {
//   const products = useSelector((state:any) => state.ecommerce.products);
//   const dispatch = useDispatch();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Products</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.product}>
//             <Text>{item.name}</Text>
//             <Text>${item.price}</Text>
//             <Button title="Add to Cart" onPress={() => dispatch(addToCart(item.id))} />
//           </View>
//         )}
//       />
//       <CartScreen />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   product: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//     padding: 8,
//     borderWidth: 1,
//     borderRadius: 4,
//   },
// });

// export default HomeScreen;
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import Button from '../Commons/Button';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
import moment from "moment";
import CalendarStrip from 'react-native-calendar-strip';


const HomeScreen = () => {
    const navigation = useNavigation();
   // const meetings = useSelector((state: RootState) => state.meetings.meetings);
  const meetings = [
    { id: '1', title: 'Coffee Meet Austin', status: 'Scheduled', date: 'Wed, 10 Jun 2023', location: 'Kerbey Lane Cafe' },
    { id: '2', title: 'Coffee Meet Austin', status: 'Pending', date: '--', location: '--' },
  ];
  const datesWhitelist = [
    // single date (today)
    moment(),

    // date range
    {
      start: moment(),
      // end: moment().add(3, 'days') 
     // end: (Date or moment Date)
    }
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ImageBackground source={require('../assests/headerBack.png')}>
        <Image source={require('../assests/Header.png')}></Image>
        <View style={styles.header}>
          <Text style={styles.title}>My Meet</Text>
         
          <View style = {{marginBottom:20}}>
          <CalendarStrip
      datesWhitelist={datesWhitelist}
      calendarHeaderStyle={{color: 'white'}}
      highlightDateContainerStyle= {{backgroundColor:'white',borderRadius:15}}
      dateNumberStyle={{color: 'white'}}
      style={{height: 150, paddingTop: 20}}

    />
    </View>
          {/* <View style={styles.calendar}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <Text
                key={index}
                style={day === 'W' ? styles.activeDay : styles.day}>
                {day}
              </Text>
            ))}
          </View> */}
          {/* <Text style={styles.activeDate}>10</Text> */}
        </View>
      </ImageBackground>
      <View style={{padding: 20}}>
        {/* Tab Section */}
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>My Meeting (Org.)</Text>
          <Text style={styles.inactiveTab}>Meeting (Invitee.)</Text>
        </View>

        {/* Meetings Section */}
        {meetings.map(meeting => (
          <View
            key={meeting.id}
            style={[
              styles.meetingCard,
              meeting.status === 'Pending' && styles.pendingCard,
            ]}>
            <Text style={styles.meetingTitle}>{meeting.title}</Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Text style={styles.meetingDetail}>🕒 {meeting.date}</Text>
              <Text style={styles.meetingDetail}>📍 {meeting.location}</Text>
            </View>
            <Text
              style={[
                styles.status,
                meeting.status === 'Pending'
                  ? styles.pendingStatus
                  : styles.scheduledStatus,
              ]}>
              {meeting.status}
            </Text>
          </View>
        ))}

        {/* Group Section */}
        <View style={styles.groupSection}>
          <Text style={styles.groupTitle}>My Group</Text>
          <View style={styles.groupCard}>
            <View>
              <Image source={require('../assests/meeting.png')}></Image>
            </View>
            <View style={styles.groupSubCard}>
              <Text>No group Found</Text>
              <TouchableOpacity style={styles.createGroupButton}>
                <Text style={styles.createGroupText}>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom Button */}

        <Button
          text={'Create New Meet'}
          onPress={() => navigation.navigate('CreateGroup')}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#F5F5F5',
    // paddingHorizontal: 20,
   // marginTop:20,
    
  },
  header: {
   // height:180,
   // backgroundColor:'black',
   // flex:1,
   // alignItems: 'center',
   padding:20,
  // marginBottom: 16,
   // marginTop:20,
  
  },
  title: {
    fontSize: 24,
   // fontWeight: 'bold',
    color: '#FFF',
  },
  date: {
    fontSize: 16,
    color: '#FFF',
    marginTop:20,
  },
  calendar: {
    flexDirection: 'row',
    marginTop: 8,
  },
  day: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 4,
  },
  activeDay: {
    fontSize: 14,
    color: '#7F57FE',
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  activeDate: {
    fontSize: 24,
    color: '#7F57FE',
    fontWeight: 'bold',
    marginTop: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginVertical: 16,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7F57FE',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#888',
  },
  meetingCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#7F57FE',
    
  },
  pendingCard: {
    borderLeftColor: '#FF4D4D',
  },
  meetingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  meetingDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  scheduledStatus: {
    color: '#4CAF50',
  },
  pendingStatus: {
    color: '#FF4D4D',
  },
  groupSection: {
    marginTop: 16,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  groupCard: {
    backgroundColor: '#E7E9FE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection:'row',
  },
  groupSubCard:{
    margin:20,
    alignItems:'center',
    
  },
  createGroupButton: {
    marginTop: 20,
    borderColor: '#7F57FE',
    borderWidth:2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  createGroupText: {
   // color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  createMeetButton: {
    marginTop: 16,
    backgroundColor: '#D74DFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  createMeetText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});




export default HomeScreen;
