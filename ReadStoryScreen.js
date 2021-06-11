import react, { Component } from 'react'
import { StyleSheet , View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class WriteStoryScreen extends Component  {
    constructor(){
      super();
    }
 render(){
     return(
         <View style={styles.contaiener}>
         <Text>Read Story </Text>
         </View>
     )
 }}
 const Styles = StyleSheet.create({
     Container:{
         Colors:"red"
     }
 })