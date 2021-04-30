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
import db from '../config'

export default class Book extends Component{

    constructor() {
      super();
      this.state = {
        like : 0,
        dislike : 0
      }
    }

    likecount = () => {
      this.setState({
        like : this.state.like + 1
      })
    }

    dislikecount = () => {
      this.setState({
        dislike : this.state.dislike + 1
      })
    } 

  render() {
    return(
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      1) Diary of a Wimpy Kid : The Meltdown  
      </Text>
      <Image style = {{
        height : 300,
        width : 200,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 75
      }}
      source = {require('../assets/wimpy.jpg')}/>
       <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      On a hot day in January, Greg worries about climate change and how it will impact his life in the future. When he forgets about a social studies assignment, his mother punishes him by not allowing him to watch television or play video games. Greg is unable to play outside due to a rivalry between groups on his street: those who live on the straight Lower Surrey Street or the slanted Upper Surrey Street. The day after, his family unsuccessfully searches for their pet pig, which they acquired during the events of The Long Haul, who had escaped from obedience school.

Greg is frustrated at school when his classmates are unsanitary, and struggles with the cold weather. While walking to school, Greg is stopped by the Safety Patrol, an authoritative organization of only female students. The students begin rioting at the school when they fear that they will be snowed in overnight, and are dismissed early. Greg and his friend Rowley take the bus of the rival Whirley Street, and are mistakenly blamed for having thrown a snowball at the bus driver. The two are kicked off the bus and dropped off near the woods, where they accidentally wander into the camp of the Mingo Kids, a savage group who live in the woods. However, Greg and Rowley are saved when they come across Greg's father.

The next morning, Greg meets with Rowley and builds a snow fort, indirectly starting a snowball fight among the Upper Surrey Street kids. They agree to team up after being ambushed by the Lower Surrey Street residents, and build a single gigantic fort. A Lower Surrey Street spy infiltrates and gets the fort destroyed, when the Safety Patrol begin to attack Greg. After some Whirley Street people and the Mingo Kids get involved, Greg and Rowley try to hide in the remains of the snow fort. A snowplow arrives, drives through the forts, and everyone agrees to stop fighting. Days later, the weather begins to clear up. Greg is glad that he survived the snowball fight.       
      </Text>
      <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate this Avengers Endgame Review</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likecount}>
           
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbsup.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikecount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 200,
                }}
                source={require('../assets/thumbsdown.png')}
              />
            </TouchableOpacity>
          </View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red'
      }}>
      Geronimo Stilton : The Dragon of Fortune 
      </Text>
      <Image style = {{
        height : 300,
        width : 200,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 75
      }}
      source = {require('../assets/stilton.jpg')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      If you are a reader who likes fantasy, stories about good versus evil, and mystery, then I think you may find this chapter book a good read. The chapters are filled with details of the story, events, locations, the characters, and of course Geronimo Stilton's adventure as the tries to find the Winged Ring which was stolen from him.

There are detailed colorful drawings of the locations, characters with short biographies, maps of castles and kingdoms, mazes, and jokes. There are activities for the reader and the answers are at the end of the book.

The story takes Geronimo from his home to the Kingdom of Fantasy. He lost the precious magic ring that allows him to travel between his home and the home of the fairies.It is his responsibility to find it. His search takes him to various other kingdoms in which he meets characters who are helpful in his search and characters who want to destroy him so he cannot find the ring. 

Of course good triumphs over evil in the end and Geronimo becomes the hero as he returns the ring to its rightful owner. 

There is a lot of action and funny lines in this story like the other Geronimo Stilton stories.
      </Text>
      <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate this Avengers Endgame Review</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likecount}>
           
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbsup.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikecount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 200,
                }}
                source={require('../assets/thumbsdown.png')}
              />
            </TouchableOpacity>
          </View>
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

const styles = StyleSheet.create({
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
})