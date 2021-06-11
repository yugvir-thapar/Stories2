import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {creatBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/ReadStoryScreen'
import ReadStoryScreen from './screens/WriteStoryScreen'
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config'
import firbase from 'firebase'


export default class App extends Component  {
  constructor(){
    super();
  }
  render(){
  return(
    <View>
       <Header
            backgroundColor={'lightgreen'}
            centerComponent={{
              text: 'Stories',
              style: { color: 'FEF153', fontSize: 25 },
            }}
          />
    </View>
  )
}
}
<TextInput
placeholder="Enter Text Here"
style={styles.textStyle}
onChangeText={(text) => {
  this.setState({ text: text });
}}
/>
const TabNavigator = createBottomTabNavigator(
  {
    ReadStoryScreen: { screen: ReadStoryScreen },
    WriteStoryScreen: { screen:WriteStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'ReadStoryScreen') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'WriteStoryScreen') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);


