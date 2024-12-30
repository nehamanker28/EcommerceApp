import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import ProfileScreen from './src/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './src/Settings';
import CreateGroup from './src/CreateGroup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const SettingsNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={() => ({headerShown:false,navigationBarHidden:false})}>
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer> 
        <RootStack/>
     </NavigationContainer>
   
  //   <Provider store={store}>
  //     <NavigationContainer> 
  //     <Tab.Navigator 
  //      screenOptions  ={({ route }) => 
  //       ({
  //         headerShown:false,
      
  //       tabBarActiveTintColor: 'blue',
  //       tabBarInactiveTintColor: 'gray',
  //     })
  //   }
  //     >
  //     <Tab.Screen name="Home" component={HomeScreen} />
  //     <Tab.Screen name="Profile" component={SettingsNavigator} />
  //     <Tab.Screen name="Cart" component={CartScreen} />
      
  //   </Tab.Navigator>
  //  </NavigationContainer>
    
  //   </Provider>
  );
};
function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Dashboard" component={HomeScreen}  />
      <Stack.Screen name ="CreateGroup" component={CreateGroup} options={() => ({headerShown:false})}/>
    </Stack.Navigator>
  );
}
export default App;


