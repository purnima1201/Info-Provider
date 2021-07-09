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

export default class CovidNews extends Component{
  render() {
    return(
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 30,
        color : 'red'
      }}>
      Symptons  
      </Text>
       <Text style = {{
        fontWeight : 'bold',
        fontSize : 20, 
        color : 'black'
      }}>
      1) Dry Cough
      2) Fever
      3) Tiredness
      4) Diarrhoea
      5) A Rash on Skin, or Discolouration of Fingers or Toes
      6) Loss of Speech or Movement
      7) Chest Pain or Pressure
      8) Headache
      9) Conjunctivitis
      10) Loss of Taste or Smell
      11) Sore Throat
      </Text>

      <Text style = {{
        fontWeight : 'bold',
        fontSize : 30,
        color : 'red'
      }}>
      Precautions  
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 20, 
        color : 'black'
      }}>
      1) Always wear a Mask and Drink a Hot Water
      2) Eat a Citrus Fruits and Subtances Rich in Vitamin C
      3) Always Be Active
      4) Always Do Exercise 
      5) Never Go in Groups or Rallies
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