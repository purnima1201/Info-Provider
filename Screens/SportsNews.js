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

export default class SportsNews extends Component{

     _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://sports.ndtv.com');
  };

  render() {
    return(
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      1) RCB aim to Vivo IPL 2021 Title as MI lose by 2 wickets, Harshal Patel awarded the MAN OF THE MATCH:  
      </Text>
      <Image style = {{
        height : 100,
        width : 150,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/ipl.png')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      RCB won the Opening Match of the VIVO IPL Tournament by 2 wickets. Harshal Patel and Glenn Maxwell debuted for RCB and showed great perfomances. Harshal Patel stared as the MAN OF THE MATCH with a superb 5 Wicket Haul 
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      2) Tokyo Tightens Virus Measures Nearly 100 Days Before Olympics:  
      </Text>
      <Image style = {{
        height : 275,
        width : 175,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/olympics.png')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      Tighter coronavirus measures for Japan captial Tokyo and other parts of the country were imposed by the Japan government on Friday, with just over 100 days remaining for the start of Tokyo Olympics. 
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