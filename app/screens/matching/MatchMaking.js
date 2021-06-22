import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import TwoEmojis from '../../components/twoEmojis';
import theme from '../../constants/theme';
import Button from '../../shared/BiggestButton';
import ArrowButton from '../../shared/ArrowButton';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';

import {createStackNavigator} from '@react-navigation/stack';

import Week from './Week';
import AddWeek from './AddWeek';
import Chat from './Chat';
import images from '../../constants/images';

class MatchMaking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.mainContainer}>
          <Text style={Styles.details}>{strings.match}</Text>
          <View style={Styles.lessGapCreator}></View>
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>heading</Text>
            <TwoEmojis
              emoji1="text1"
              emoji2="text2"
              emojiOne={images.disappointed}
              emojiTwo={images.smilingFace}
            />
            <TwoEmojis
              emoji1="text1"
              emoji2="text2"
              emojiOne={images.angry}
              emojiTwo={images.mad}
            />
            <TwoEmojis
              emoji1="text1"
              emoji2="text2"
              emojiOne={images.smiling}
              emojiTwo={images.flushed}
            />
          </View>
          <View style={Styles.lessGapCreator}></View>
          <ArrowButton
            icon="arrow-forward-outline"
            onPress={() => navigation.navigate('Week')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    width: '100%',
    marginTop: theme.hp('1%'),
    height: theme.hp('35%'),
    backgroundColor: theme.white,
    borderRadius: 5,
  },
  heading: {
    color: theme.black,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 10,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer independent={false}>
    <Stack.Navigator headerMode="none" initialRouteName="MatchMaking">
      <Stack.Screen name="MatchMaking" component={MatchMaking} />
      <Stack.Screen name="Week" component={Week} />
      <Stack.Screen name="AddWeek" component={AddWeek} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
