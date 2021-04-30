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

export default class Movie extends Component{

    constructor() {
      super();
      this.state = {
        like : 0,
        dislike : 0
      }
    }

    likecount = ()=>{
      this.setState({
        like : this.state.like + 1 
      })
    }

    dislikecount = ()=>{
      this.setState({
        dislike : this.state.dislike + 1
      })
    }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=TcMBFSGVi1c&t=41s');
  };

  _handledOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=7TavVZMewpY');
  };

  render() {
    return(
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red',
        alignSelf : 'center'
      }}>
      Avengers Endgame
      </Text>
      <Image style = {{
        height : 225,
        width : 175,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 75
      }}
      source = {require('../assets/endgame.jpg')}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
      Twenty-three days after Thanos killed half of all life in the universe, Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers — Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.

Five years later, in 2023, Scott Lang escapes from the quantum realm. Reaching the Avengers' compound, he explains that he experienced only five hours while trapped. Theorizing the quantum realm allows time travel, they ask Stark to help them get the Stones from the past to reverse Thanos's actions in the present. Stark, Rocket, and Banner, who has since merged his intelligence with the Hulk's strength, build a time machine. Banner notes that changing the past does not affect their present; any changes create alternate realities. Visiting the Asgardian refugees' settlement New Asgard, in Norway, Banner and Rocket recruit an overweight and despondent Thor. In Tokyo, Romanoff recruits Clint Barton, who had become a vigilante after the death of his family.

Banner, Lang, Rogers, and Stark travel to New York City during Loki's attack in 2012. At the Sanctum Sanctorum, Banner convinces the Ancient One to give him the Time Stone by promising to return the various Stones to their proper points in time. At Stark Tower, Rogers retrieves the Mind Stone from Hydra sleeper agents, but Stark and Lang's attempt to steal the Space Stone fails, allowing 2012-Loki to escape with it. Rogers and Stark travel to the S.H.I.E.L.D. headquarters in 1970, where Stark obtains an earlier version of the Space Stone and encounters his father, Howard. Rogers steals Pym Particles from Hank Pym to return to the present and spies his lost love, Peggy Carter.

Meanwhile, Rocket and Thor travel to Asgard in 2013; the former extracts the Reality Stone from Jane Foster, while the latter gets encouragement from his mother, Frigga, and retrieves his old hammer, Mjolnir. Barton, Romanoff, Nebula, and Rhodes travel to 2014; Nebula and Rhodes go to Morag and steal the Power Stone before Peter Quill can, while Barton and Romanoff travel to Vormir. The Soul Stone's keeper, Red Skull, reveals it can only be acquired by sacrificing a loved one. Romanoff sacrifices herself, allowing Barton to get the Stone. Rhodes and Nebula attempt to return to their own time, but Nebula is incapacitated when her cybernetic implants link with her past self, allowing 2014-Thanos to learn of his future self's success and the Avengers' attempt to undo it. 2014-Thanos sends 2014-Nebula forward in time to prepare for his arrival.

Reuniting in the present, the Avengers place the Stones into a gauntlet that Stark, Banner, and Rocket built. Banner, having the most resistance to their radiation, wields the gauntlet and reverses Thanos's disintegrations. Meanwhile, 2014-Nebula, impersonating her future self, uses the time machine to transport 2014-Thanos and his warship to the present, destroying the Avengers' compound in the process. Present-day Nebula convinces 2014-Gamora to betray Thanos, but is unable to convince 2014-Nebula and kills her. Thanos overpowers Stark, Thor, and a Mjolnir-wielding Rogers and summons his army to retrieve the Stones, intent on using them to destroy the universe and create a new one. A restored Stephen Strange arrives with other sorcerers, the restored Avengers and Guardians of the Galaxy, the Ravagers, and the armies of Wakanda and Asgard to fight Thanos's army. Danvers also shows up and destroys Thanos's warship, but Thanos overpowers her and seizes the gauntlet. Stark grabs the Stones and uses them to disintegrate Thanos and his army, but the strain of using the Stones kills him.

Following Stark's funeral, Thor appoints Valkyrie as the new ruler of New Asgard and joins the Guardians. Rogers returns the Stones and Mjolnir to their proper timelines and remains in the past to live with Carter. In the present, an elderly Rogers passes his shield to Sam Wilson.

      </Text>
       <Text onPress = {this._handleOpenWithWebBrowser}
      style = {{
        fontWeight : 'underline',
        fontSize : 20, 
        color : 'blue'
      }}>
      To see the trailer of Avengers Endgame... Click on this link
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
      <View>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 15,
        color : 'red',
        alignSelf : 'center'
      }}>
      The Lion King
      </Text>
      <Image style = {{
        height : 225,
        width : 175,
        borderRadius : 10,
        borderWidth : 3,
        marginLeft : 75
      }}
      source = {require('../assets/lion.jfif')}/>
          <Text style = {{
        fontWeight : 'bold',
        fontSize : 10, 
        color : 'black'
      }}>
     n the Pride Lands of Africa, a pride of lions rule over the animal kingdom from Pride Rock. King Mufasa and Queen Sarabi present their newborn son, Simba, to the gathering animals by Rafiki the mandrill, the kingdom's shaman and advisor.

Mufasa shows Simba the Pride Lands and explains to him the responsibilities of kingship and the "circle of life", which connects all living things. Mufasa's younger brother, Scar, covets the throne and plots to get rid of Mufasa and Simba, so he may become king. He tricks Simba and his best friend Nala into exploring a forbidden elephants' graveyard, where the ruthless Shenzi attacks them using hyenas. Mufasa hears about the incident from his majordomo, the hornbill Zazu, and rescues the cubs. Though upset with Simba, Mufasa forgives him and explains that the great kings of the past watch over them from the night sky, from which he will one day watch over Simba. Meanwhile, Scar visits the hyenas and convinces them to help him overthrow Mufasa in exchange for hunting rights in the Pride Lands.

Scar sets a trap for his brother and nephew, luring Simba into a gorge and having the hyenas drive a large herd of wildebeest into a stampede that will trample him. He informs Mufasa of Simba's peril, knowing that the king will rush to save his son. Mufasa saves Simba but ends up hanging perilously from the gorge's edge. Scar refuses to help Mufasa, instead sending him falling to his death. He then convinces Simba that the tragedy was Simba's own fault and advises him to leave the kingdom and never return. He orders the hyenas to kill the cub, but Simba escapes. Scar tells the pride that the stampede killed both Mufasa and Simba and steps forward as the new king, allowing Shenzi's clan to live in the Pride Lands.

Timon and Pumbaa, a meerkat and warthog, rescue Simba, who collapses in a desert. Simba grows up in the oasis with his two new friends and other animals in their oasis, living a carefree life under the motto "hakuna matata" ("no worries" in Swahili).

A grown-up Simba rescues Timon and Pumbaa from a hungry lioness, who turns out to be Nala. She and Simba reunite and fall in love, and she urges him to return home, telling him that the Pride Lands have become a drought-stricken wasteland under Scar's reign. Feeling guilty over his father's death, Simba refuses and storms off. He then encounters Rafiki, who tells him that Mufasa's spirit lives on in Simba. Simba visits the ghost of Mufasa in the night sky, who tells him that he must take his rightful place as king. Realizing that he can no longer run from his past, Simba decides to return to the Pride Lands.

Aided by his friends, Simba sneaks past the hyenas at Pride Rock and confronts Scar, who was about to fight Sarabi. Scar taunts Simba over his role in Mufasa's death and backs him to the edge of the rock, where he reveals to him that he murdered Mufasa. Enraged, Simba forces him to show the truth to the rest of the pride. Timon, Pumbaa, Rafiki, Zazu, and the lionesses fend off the hyenas while Scar, attempting to escape, which Simba corners at a ledge near the top of Pride Rock. Scar begs for mercy and attempts to blame his crimes on the hyenas; Simba spares his life but orders him to leave the Pride Lands forever. Scar refuses and attacks his nephew, but Simba throws him off the cliff after a brief fight. Scar survives the fall but gets attacked and mauled to death by the hyenas, who overheard his attempt to betray them. Afterward, Simba takes over the kingship and makes Nala his queen.

With the Pride Lands restored to its usual state, Rafiki presents Simba and Nala's newborn cub to the assembled animals, continuing the circle of life.

      </Text>
      <Text onPress = {this._handledOpenWithWebBrowser}
      style = {{
        fontWeight : 'underline',
        fontSize : 20, 
        color : 'blue'
      }}>
      To see the trailer of The Lion King... Click on this link
      </Text>
      <View>
      <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate this Avengers Endgame Review</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likecount}>
           
              <Image
                style={{ width: 50, height: 50, marginLeft: 15 }}
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
      </View>
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