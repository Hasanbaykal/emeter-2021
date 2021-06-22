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
import ArrowButton from '../../shared/ArrowButton';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';

import Chat from './Chat';
import images from '../../constants/images';

class AddWeek extends Component {
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
        <View style={{alignSelf: 'flex-start'}}>
          <ArrowButton icon="arrow-back-outline" />
        </View>
        <Text style={styles.heading}>Vrijdag 19 maart</Text>
        <Text style={styles.subHeading}>...</Text>

        <View style={styles.innerContainer}>
          <View style={Styles.gapCreator}></View>
          <View
            style={{
              width: '70%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Text style={styles.title}>cijfer:</Text>
            <Text style={styles.title}>2</Text>
          </View>
          <View style={Styles.lessGapCreator}></View>
          <View
            style={{
              width: '77%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>Ik voelde mij:</Text>
            <Image source={images.flushed} style={styles.image} />
          </View>
          <View style={Styles.lessGapCreator}></View>
          <TextInput
            placeholder="Dit is er gebeurd.."
            placeholderTextColor={theme.black}
            value={this.state.gebeurd}
            style={Styles.inputBox}
            multiline={true}
            onChangeText={gebeurd => this.setState({gebeurd})}
          />
          <TextInput
            placeholder="Dit heb ik gegeten.."
            placeholderTextColor={theme.black}
            value={this.state.gegeten}
            style={Styles.inputBox}
            multiline={true}
            onChangeText={gegeten => this.setState({gegeten})}
          />
          <View style={Styles.gapCreator}></View>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              alignItems: 'flex-end',
            }}>
            <ArrowButton
              icon="arrow-forward-outline"
              onPress={() => navigation.navigate('Chat')}
            />
          </View>
          <View style={Styles.lesserGapCreator}></View>
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

export default AddWeek;
