import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import MatchMaking from '../screens/matching/MatchMaking';
import Match from '../screens/matching/MatchMaking';
import Profile from '../screens/profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import theme from '../constants/theme';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: theme.black,
          height: 70,
          paddingBottom: Platform.OS == 'ios' ? 15 : 5,
          paddingTop: 2,
        },
        activeTintColor: theme.white,
        inactiveTintColor: theme.grey,
        labelStyle: {
          fontSize: 12,
          fontFamily: theme.fontFamilyBold,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={({}) => ({
          tabBarIcon: () => (
            <IonIcon name="home" color={theme.white} size={24} />
          ),
        })}
      />
      <Tab.Screen
        name="matchmaking"
        component={MatchMaking}
        options={({}) => ({
          tabBarIcon: () => (
            <IonIcon
              name="arrow-forward-circle"
              color={theme.white}
              size={26}
            />
          ),
        })}
      />
      <Tab.Screen
        name="buddy"
        component={Match}
        options={({}) => ({
          tabBarIcon: () => (
            <IonIcon name="heart" color={theme.white} size={26} />
          ),
        })}
      />
      <Tab.Screen
        name="profiel"
        component={Profile}
        options={({}) => ({
          tabBarIcon: () => (
            <IonIcon name="person" color={theme.white} size={26} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
