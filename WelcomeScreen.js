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

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailid: '',
      password: '',
    };
  }

  login = async (email, password) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (response) {
      this.props.navigation.navigate('Home');
    } else {
      alert('Enter Email And Password');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 50,
              color: 'red',
            }}>
            Info Provider
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 300,
              height: 200,
              marginBottom: 50,
              marginLeft: 10,
              borderWidth: 2,
            }}
            source={require('../assets/info.jpeg')}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 25,
            }}>
            Enter Email ID
          </Text>

          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailid: text,
              });
            }}
          />

          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 25,
            }}>
            Enter Password
          </Text>

          <TextInput
            style={styles.loginBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderRadius: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              width: 250,
              marginLeft: 45,
              backgroundColor: 'blue',
            }}
            onPress={() => {
              this.props.navigation.navigate(
                "Home"
              )
              this.login(this.state.email, this.state.password);
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Login
            </Text>
          </TouchableOpacity >

          <TouchableOpacity style={{
              borderWidth: 3,
              borderRadius: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              width: 250,
              marginLeft: 45,
              backgroundColor: 'blue',
              marginTop : 10
            }}
            onPress={() => {
              this.props.navigation.navigate(
                'SignUp'
              )
              
            }}>
          <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
