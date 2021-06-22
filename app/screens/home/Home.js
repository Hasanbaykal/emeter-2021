import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from './Styles';
import strings from '../../constants/strings';
import images from '../../constants/images';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {Divider} from 'react-native-paper';

import {Calendar} from 'react-native-calendars';
import theme from '../../constants/theme';

class Home extends Component {
  state = {
    language: 'java',
    length: 'Miles',
  };
  render() {
    const navigation = this.props.navigation;
    const vacation = {
      key: 'vacation',
      color: theme.green,
      selectedDotColor: 'blue',
    };
    const massage = {
      key: 'massage',
      color: theme.red,
      selectedDotColor: 'blue',
    };
    const workout = {key: 'workout', color: theme.blue};
    const running = {key: 'running', color: theme.userColor};
    const jogging = {
      key: 'jogging',
      color: theme.black,
      selectedDotColor: 'blue',
    };
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={styles.heading}>Vrijdag 19 maart</Text>
        <Text style={styles.subHeading}>Selecteer dag:</Text>
        <Calendar
          markingType={'multi-dot'}
          markedDates={{
            '2021-02-11': {
              selected: true,
              selectedColor: theme.mainColor,
              customStyles: {
                container: {
                  backgroundColor: theme.mainColor,
                },
                text: {
                  color: theme.white,
                  fontWeight: 'bold',
                },
                dotStyle: {
                  fontSize: 22,
                },
              },
            },
            '2021-02-06': {
              dots: [vacation, massage, workout, running],
              selected: false,
              selectedColor: 'red',
              customStyles: {
                dot: {
                  fontSize: 30,
                },
              },
            },
            '2021-02-08': {dots: [massage, workout], disabled: false},
            '2021-02-17': {dots: [jogging, vacation], disabled: true},
            '2021-02-22': {
              dots: [vacation, massage, workout],
              disabled: false,
            },
          }}
        />
        <Text style={styles.subHeading}>Statistieken</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: theme.hp('3%'),
  },
  innerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueContainer: {
    width: '35%',
    backgroundColor: theme.white,
    marginLeft: 8,
    borderRadius: 7,
  },
  secondPicker: {
    width: '57%',
    backgroundColor: theme.white,
    marginRight: 10,
    borderRadius: 7,
  },
  thirdContainer: {
    width: '95%',
    backgroundColor: theme.white,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 7,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: theme.mainColor,
    height: theme.hp('7%'),
    width: theme.wp('100%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.white,
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.hp('2.5%'),
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontFamily: theme.fontFamilyBold,
    fontSize: 20,
    color: theme.mainColor,
  },
  infoText: {
    fontFamily: theme.fontFamilyRegular,
    fontSize: 14,
    color: theme.black,
    textAlign: 'center',
  },
  secondContainer: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },
  textComponent: {
    fontFamily: theme.fontFamilyRegular,
    fontSize: 16,
    color: theme.black,
    marginTop: 3,
  },
  bottomSheetContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: theme.secondaryColor,
  },
  pickerContainer: {
    paddingLeft: 8,
    backgroundColor: theme.white,
  },
  pickerStyle: {
    height: 50,
  },
  heading: {
    color: theme.black,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 28,
    // alignSelf: 'center',
    marginLeft: 10,
  },
  subHeading: {
    color: theme.black,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 14,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default Home;
