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
import InternationalNews from './InternationalNews';
import NationalNews from './NationalNews';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View>
        <TouchableOpacity
        onPress = {()=>{
          this.props.navigation.navigate("Profile")
        }}>
            <Image
              style={{ height: 30, width: 30, marginLeft : 275, marginTop : 20 }}
              source={require('../assets/profilePic.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'red',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Home
          </Text>
          
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            This is a Info Provider App. This app provides you information on
            the following topics
          </Text>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('InternationalNews');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              International News
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('NationalNews');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              National News
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('SportsNews');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Sports News
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('WeatherScreen');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Weather Report
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('CovidNews');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Covid 19 Precautions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('Book');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Book Reviews
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 3,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 50,
              width: 150,
              backgroundColor: 'blue',
              marginTop: 25,
            }}
            onPress={() => {
              this.props.navigation.navigate('Movie');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Movie Reviews
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
