import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Styles from './Styles';
import images from '../../constants/images';
import BiggestButton from '../../shared/BiggestButton';
import Button from '../../shared/Button';
import theme from '../../constants/theme';

export default class Splash extends Component {
  componentDidMount() {
    // setTimeout(
    //   function () {
    //     this.props.navigation.navigate('BottomTab');
    //   }.bind(this),
    //   2000,
    // );
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={Styles.container}>
        <Image source={images.logo} style={Styles.logo} />
        <View style={Styles.mostGapCreator}></View>
        <BiggestButton
          title="Log in met E-mail"
          onBigPress={() => navigation.navigate('BottomTab')}
        />
        <View style={Styles.gapCreator}></View>
        <View
          style={{
            width: '85%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            title="Google"
            color={theme.black}
            textColor={theme.white}
            onPress={() => navigation.navigate('BottomTab')}
          />
          <Button
            title="Apple ID"
            color={theme.black}
            textColor={theme.white}
            onPress={() => navigation.navigate('BottomTab')}
          />
        </View>
      </View>
    );
  }
}
