import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {creatBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStoryScreen extends Component  {
  constructor(){
    super();
   
  }
  render(){
    SubmitStory = async ()=>{
    db.collection(STORIES).add({ title:this.state.title,author:this.state.author,story:this.state.story})
    } 
  return(
    <View>
       <Header
            backgroundColor={'brown'}
            centerComponent={{
              text: 'Stories',
              style: { color: 'FEF153', fontSize: 25 },
            }}
            
            
          />
          <TouchableOpacity
          onpress={this.SubmitStory}
          style={Styles.SubmitButton}
          >
            <Text 
            styles={}>
            Submit
            </Text>
          </TouchableOpacity>
          <TextInput
          placeholder="Enter Title Here"
          onChangeText={(text) => {
          this.setState({Title: text });
}}

/>
<TextInput
          placeholder="Enter Author Name Here"
          onChangeText={(text) => {
          this.setState({ Author: text });
}}

/>
<TextInput
          placeholder="Enter Story Here"
          onChangeText={(text) => {
          this.setState({ Story: text });
}}

/>
    </View>
  )
}
}
function submitStory(){

}
const Styles = StyleSheet.create({
  SubmitButton:{
      Colors:"green",
      alignContent:"center",
      alignSelf:"center",
      alignItems:"center",
      borderWidth:"2"
      
  }
  ,
  TextStyle:{
    color:'red',
    alignContent:"center",
    alignSelf:"center",
    alignItems:"center",
    font:"bold,italic",
    
  }
})



