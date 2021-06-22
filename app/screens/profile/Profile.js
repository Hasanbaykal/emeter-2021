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
import SearchItem from '../../components/searchItem';
import theme from '../../constants/theme';
import BiggestButton from '../../shared/BiggestButton';
import BorderedButton from '../../shared/BorderedButton';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';
import images from '../../constants/images';

import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from './EditProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.mainContainer}>
          <Image source={images.logo} style={Styles.logo} />
          <View style={Styles.lesserGapCreator}></View>
          <Text
            style={{
              color: theme.black,
              fontFamily: theme.fontFamilyExtraBold,
              fontSize: 30,
            }}>
            Hasan Baykal
          </Text>
          <Text
            style={{
              color: theme.black,
              fontFamily: theme.fontFamilyBold,
              fontSize: 14,
              marginTop: -2,
            }}>
            test123@gmail.com
          </Text>
          <View style={Styles.lessGapCreator}></View>
          <BorderedButton
            title="Bewerk Profiel"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <View style={{marginTop: theme.hp('30%')}}></View>
          <BiggestButton title="Log uit" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    width: '95%',
    marginTop: theme.hp('1%'),
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default App;
