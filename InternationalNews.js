import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Linking
} from 'react-native';
import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import Home from './Home';


export default class InternationalNews extends Component {

    _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.bbc.com/news/world');
  };

  render() {
    return (
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      1) NASA Ingenuity Helicopter survives first night alone on Mars :  
      </Text>
      <Image style = {{
        height : 100,
        width : 100,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/heli.jfif')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      The ultra-light aircraft was dropped on the surface on Saturday after detaching from the belly of the  Preservence Rover, which touched the Red Planet on February 18, 2021 
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      2) UK eyes mass testing as it next steps of Lockdown
      </Text>
      <Image style = {{
        height : 100,
        width : 100,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/covid.jfif')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      The Adults and Children in the United States have to be tested for Covid 19 twice a week for their safety. Prime Minister Boris Johnson said that testing people would not have any symptons and could stop the virus tracks.
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      3) World Health Organisation denies issuing warning of 50,000 Covid 19 deaths in India by April 15; says it is Fake News
      </Text>
        <Image style = {{
        height : 100,
        width : 100,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/who.jfif')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      WHO has refuted reports claiming that it has issued a warningon 50,000 fatalities due to Covid 19 in India by April 25.

      
      </Text>
    

      <Text onPress = {this._handleOpenWithWebBrowser}
      style = {{
        fontWeight : 'underline',
        fontSize : 20, 
        color : 'blue'
      }}>
      For more News... Click on this link
      </Text>

      <TouchableOpacity
      onPress = {()=>{
        this.props.navigation.navigate('Home')
      }}>
      <Image style = {{
        height : 20,
        width : 20,
        marginLeft : 15,
        marginTop : 10
      }}
      source = {require('../assets/back.png')}
      />
      </TouchableOpacity>
      </View>

      
    )
  }
}