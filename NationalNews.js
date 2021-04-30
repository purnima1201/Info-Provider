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

export default class NationalNews extends Component{

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.ndtv.com/india');
  };

  render() {
    return(
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      1) Negative Covid Report Must For Entering Himachal From 7 States :  
      </Text>
      <Image style = {{
        height : 100,
        width : 150,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/covidTest.jfif')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      Chief Minister Jai Ram Thakur said people coming from Punjab, Delhi, Maharashtra, Gujarat, Karnataka, Rajasthan and Uttar Pradesh need to carry a negative RT-PCR report not earlier than 72 hours while visiting Himachal Pradesh from April 16.
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      2) Election Commission Defends Using Armed Forces In Tweet On Bengal Polls :  
      </Text>
      <Image style = {{
        height : 100,
        width : 150,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/bengal.jfif')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      The Election Commission has defended its use of the armed forces in a tweet - viewed by some as a violation of its own rules - urging eligible people to vote in the final phases of the Bengal polls.
The poll body said the Model Code - which cautions against involving the armed forces in election campaigns - was applicable only to political parties and their poll strategies and material, and did not apply in this case. The Commission said its tweet was only meant to educate people about the importance of voting.
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      3) India Bans Export Of Anti-Viral Drug Remdesivir Amid Surge In Covid Cases :  
      </Text>
      <Image style = {{
        height : 100,
        width : 150,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 100
      }}
      source = {require('../assets/coviidnEWS.webp')}/>
       <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      India has banned export of the anti-viral drug Remdesivir amid a surge in COVID-19 cases in the country. In an order, the government said it has banned export of Remdesivir injection and Remdesivir active pharmaceutical ingredients (API) till the pandemic situation in the country stabilises.
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