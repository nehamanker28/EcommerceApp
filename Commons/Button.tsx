import React from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface Props {
    
   //iconImg:any;
   text:any;
   onPress?:any;

}


export default function Button(props : Props) : JSX.Element {
return(
    <View style = {{paddingHorizontal:10}}>
         <TouchableOpacity style={styles.createMeetButton} 
         onPress={() => props.onPress()}>
            <Text style={styles.createMeetText}>{props.text}</Text>
          </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
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
})