import React from 'react';
import { Text, View ,Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingTab from '../Commons/SettingsTab';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    return( 
        <SafeAreaView style = {{flex:1,padding:10}}>
       <View style = {{justifyContent:'center'}}>
        {/* User Details */}
            <View style = {{alignItems:'center',padding:10}}>
                    <Image source={require('../assests/profilepic.png')} 
                    width={30} 
                    height={30}
                     borderRadius={15}></Image>
                    <Text style= {{fontSize:18,marginTop:5,fontWeight:'600'}}>Mark Adam</Text>
                    <Text style= {{fontSize:10,marginTop:5,color:'#9B9999'}}>sunny_Koelpin45@hotmail.com</Text>
            </View>
        {/* User Settings */}
        <View>
            
        {/* profile */}
        {/* <SettingTab iconImg={'check'} text={'Profile'}/>
        <SettingTab iconImg={'check'} text={'Setting'} onPress={() => navigation.navigate('Settings')}/>
        <SettingTab iconImg={'check'} text={'Contact'}/>
        <SettingTab iconImg={'check'} text={'Share App'}/>
        <SettingTab iconImg={'check'} text={'Help'}/> */}
        </View>
       
        {/* Setting  */}
        {/* Contact  */}
        {/* Share App  */}
        {/* Help  */}

        </View>
        </SafeAreaView>);
    
}
export default ProfileScreen;