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
  Image,
} from 'react-native';
import SingleEmoji from '../../components/singleEmoji';
import WeekItem from '../../components/weekItem';
import theme from '../../constants/theme';
import Button from '../../shared/Button';
import Header from '../../shared/MainHeader';
import ArrowButton from '../../shared/ArrowButton';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';

import images from '../../constants/images';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gebeurd: '',
      gegeten: '',
    };
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={Styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.heading}>Nog geen match (no match yet)</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    width: '90%',
    backgroundColor: theme.white,
    alignSelf: 'center',
  },
  bottomContainer: {
    width: '75%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: theme.white,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 28,
    alignSelf: 'center',
    textAlign: 'center',
  },
  subHeading: {
    color: theme.white,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 14,
    marginVertical: 15,
    alignSelf: 'center',
  },
  title: {
    color: theme.black,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 22,
  },
  divider: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 3,
    alignSelf: 'center',
    borderTopColor: theme.buttonBorder,
    borderTopWidth: 1,
  },

  image: {
    height: 40,
    width: 40,
  },
});

export default Chat;
