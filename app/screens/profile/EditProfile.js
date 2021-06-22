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
import Button from '../../shared/Button';
import Styles from './Styles';
import axios from 'axios';
import {KEY, BASE_URL} from '../../constants/network';
import MainHeader from '../../shared/MainHeader';
import strings from '../../constants/strings';
import images from '../../constants/images';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voornaam: '',
      achternaam: '',
      leeftijd: '',
      profielfoto: '',
    };
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.mainContainer}>
          <Text
            style={{
              color: theme.black,
              fontFamily: theme.fontFamilyExtraBold,
              fontSize: 20,
            }}>
            Bewerk Profiel
          </Text>
          <View style={{width: '75%'}}>
            <View style={Styles.mostGapCreator}></View>
            <Text style={Styles.label}>Voornaam</Text>
            <TextInput
              placeholder="vul je voornaam in.."
              placeholderTextColor={theme.white}
              value={this.state.voornaam}
              style={Styles.inputBox}
              onChangeText={voornaam => this.setState({voornaam})}
            />
            <Text style={Styles.label}>Achternaam</Text>
            <TextInput
              placeholder="vul je achternaam in.."
              placeholderTextColor={theme.white}
              value={this.state.achternaam}
              style={Styles.inputBox}
              onChangeText={achternaam => this.setState({achternaam})}
            />
            <Text style={Styles.label}>Leeftijd</Text>
            <TextInput
              placeholder="vul je leeftijd in.."
              placeholderTextColor={theme.white}
              value={this.state.leeftijd}
              style={Styles.inputBox}
              onChangeText={leeftijd => this.setState({leeftijd})}
            />
            <Text style={Styles.label}>Profielfoto</Text>
            <TextInput
              placeholder="Kies een profielfoto: so that means select a file"
              placeholderTextColor={theme.white}
              value={this.state.profielfoto}
              style={Styles.inputBox}
              onChangeText={profielfoto => this.setState({profielfoto})}
            />
            <View style={Styles.lessGapCreator}></View>
            <Button title="Terug" color="#695D5D" />
            <View style={Styles.lessGapCreator}></View>
            <BiggestButton title="Opslaan" />
          </View>
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

export default EditProfile;
