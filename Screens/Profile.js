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
  ImageBackground,
  Platform,
} from 'react-native';
import firebase from 'firebase';
import { DrawerItems } from "react-navigation-drawer";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class Profile extends Component {

    constructor() {
      super();
      this.state = {
        image: "#"
      }
    }

    electPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child( imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };


  render() {
    return(
      <View>
      

      <Avatar
        
            rounded
            source={{
              uri: this.state.image,
            }}
            size={"xlarge"}
            onPress={() => this.selectPicture()}
            showEditButton
          />


        <Text style = {{
          fontWeight : 'bold',
          fontSize : 15,
          alignSelf : 'center'
        }}>
        If u want to logout... click the below button..
        </Text>

         <TouchableOpacity
        onPress = {()=>{
          this.props.navigation.navigate("WelcomeScreen")
          alert("You have logged out... Pls login to use the app")
        }}>
            <Image
              style={{ height: 30, width: 30, marginLeft : 275, marginTop : 20 }}
              source={require('../assets/logout.png')}
            />
          </TouchableOpacity>
      
      </View>
    )
  }
}