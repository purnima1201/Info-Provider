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
} from 'react-native';
import firebase from 'firebase';

export default class Feedback extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: 'red',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          Feedback
        </Text>

        <View>
          <TextInput
            style={{
              height: 50,
              width: 300,
              borderRadius: 10,
              borderWidth: 2,
              marginLeft: 15,
              fontWeight : 'bold'
            }}
            placeholder={'Name'}
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 200,
              width: 300,
              borderRadius: 10,
              borderWidth: 2,
              marginLeft: 15,
              marginTop : 30,
              fontWeight : 'bold'
            }}
            placeholder={'Feedback [About 200 words]'}
          />
        </View>
            
        <View>
        <TouchableOpacity style = {{
          backgroundColor : 'blue',
          marginTop : 20,
          borderRadius : 10,
          borderWidth : 2,
          alignSelf : 'center',
          height : 45,
          width : 200
        }}
        onPress = {()=>{
          alert("Thank you for your Feedback. Pls visit us again")
          this.props.navigation.navigate("Home")
        }}>
        <Text style = {{
          color : 'white',
          alignSelf : 'center',
          fontWeight : 'bold',
          fontSize : 18
        }}>
        Submit your Feedback
        </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
