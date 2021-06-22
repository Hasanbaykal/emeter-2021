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
import SingleEmoji from '../../components/singleEmoji';
import WeekItem from '../../components/weekItem';
import theme from '../../constants/theme';
import Button from '../../shared/Button';
import ArrowButton from '../../shared/ArrowButton';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';

import {createStackNavigator} from '@react-navigation/stack';

import AddWeek from './AddWeek';
import Chat from './Chat';
import images from '../../constants/images';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={Styles.container}>
        <View style={styles.innerContainer}>
          <View style={Styles.lessGapCreator}></View>
          <Text style={styles.heading}>Deze week</Text>
          <SingleEmoji title="ma 15" count="0" emoji={images.angry} />
          <SingleEmoji title="di 16 " count="5" emoji={images.mad} />
          <SingleEmoji title="woe 17" count="8" emoji={images.smilingFace} />
          <SingleEmoji title="do 18" count="0" emoji={images.disappointed} />
          <View style={{marginTop: 10}}></View>
          <WeekItem
            title="vrij 19"
            count="vul in!"
            emoji={images.disappointed}
            onPress={() => navigation.navigate('AddWeek')}
          />
          <WeekItem title="za 20" emoji={images.disappointed} />
          <WeekItem title="zo 21" emoji={images.disappointed} />
          <View style={styles.divider}></View>
        </View>
        <View style={Styles.lessGapCreator}></View>
        <View style={styles.bottomContainer}>
          <ArrowButton icon="arrow-back-outline" />
          <Button
            title="vind een match!"
            color="#84FD6B"
            textColor={theme.black}
            onPress={() => navigation.navigate('BottomTab')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    width: '75%',
    backgroundColor: theme.white,
    alignSelf: 'center',
    paddingBottom: 30,
  },
  bottomContainer: {
    width: '75%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: theme.black,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 18,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  divider: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 3,
    alignSelf: 'center',
    borderTopColor: theme.buttonBorder,
    borderTopWidth: 1,
  },
});

export default Week;
