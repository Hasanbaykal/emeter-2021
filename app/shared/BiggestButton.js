import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';

export default function Button(props) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.mainColor,
          borderRadius: 50,
          height: theme.hp('6%'),
          width: theme.wp('85%'),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={props.onBigPress}>
        <Text
          style={{
            color: theme.white,
            fontFamily: theme.fontFamilyExtraBold,
            fontSize: theme.hp('2%'),
            alignItems: 'center',
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
