import React from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface Props {
    
   iconImg:any;
   text:any;
   onPress?:any;

}


export default function SettingTab(props : Props) : JSX.Element {
return(
<View>
<TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
      <View style={styles.iconContainer}>
        {/* <MaterialIcons name="check" size={24} color="black" /> */}
      </View>
      <Text style={styles.title}>{props.text}</Text>
      {/* <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> */}
    </TouchableOpacity>

</View>
);

}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    iconContainer: {
      marginRight: 12,
    },
    title: {
      flex: 1,
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
  });
