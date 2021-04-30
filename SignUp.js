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
import db from '../config';
import WelcomeScreen from './WelcomeScreen'

export default class SignUp extends Component {
  render() {
    return(
      <View>

        <View style={styles.loginContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              color: 'red',
            }}>
            Sign Up
          </Text>
           <View>
          <Image
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              marginLeft: 10,
              borderWidth: 2,
            }}
            source={require('../assets/signUp.png')}
          />
        </View>
          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 5,
              marginTop : 20
            }}>
            Enter your Full Name
          </Text>

          <TextInput
            style={styles.loginBox}
            placeholder="Name"           
          />

          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 5,
              marginTop : 20
            }}>
            Enter your Email ID
          </Text>

          <TextInput
            style={styles.loginBox}
            placeholder="Email ID"
            keyboardType = 'email-address'           
          />

          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 5,
              marginTop : 20
            }}>
            Enter your Password
          </Text>

          <TextInput
            style={styles.loginBox}
            placeholder="Password"
            secureTextEntry = {true}        
          />

           <TouchableOpacity style={{
              borderWidth: 3,
              borderRadius: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              width: 250,
              marginLeft: 10,
              backgroundColor: 'green',
              marginTop : 10
            }}
            onPress = {()=>{
              alert("User Added Sucessfully");
              this.props.navigation.navigate("WelcomeScreen")
            }}>
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
            Register
            </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              borderWidth: 3,
              borderRadius: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              width: 250,
              marginLeft: 10,
              backgroundColor: 'red',
              marginTop : 10
            }}
            onPress = {()=>{
              this.props.navigation.navigate("WelcomeScreen")
            }}>
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
            Cancel
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})