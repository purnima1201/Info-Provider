import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './Screens/WelcomeScreen';
import Feedback from './Screens/Feedback';
import Home from './Screens/Home';
import {
  Image
} from 'react-native';
import InternationalNews from './Screens/InternationalNews';
import NationalNews from './Screens/NationalNews';
import SportsNews from './Screens/SportsNews';
import WeatherScreen from './Screens/WeatherScreen';
import CovidNews from './Screens/CovidNews';
import Book from './Screens/Book';
import Movie from './Screens/Movie';
import Profile from './Screens/Profile'
import SignUp from './Screens/SignUp'

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Home : {screen: Home},
  Feedback: {screen: Feedback},
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require('./assets/home.png')}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Feedback"){
        return(
          <Image
          source={require('./assets/feedbackk.png')}
          style={{width:40, height:40}}
        />
        )
        
      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  TabNavigator: {screen: TabNavigator},
  InternationalNews : {screen : InternationalNews},
  NationalNews : {screen : NationalNews},
  SportsNews : {screen : SportsNews},
  WeatherScreen : {screen : WeatherScreen},
  CovidNews : {screen : CovidNews},
  Book : {screen : Book},
  Movie : {screen : Movie},
  Profile : {screen : Profile},
  SignUp : {screen : SignUp}
})

const AppContainer =  createAppContainer(switchNavigator);
