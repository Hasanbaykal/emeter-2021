import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';

export default function Button(props) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.white,
          borderRadius: 50,
          height: theme.hp('6%'),
          width: theme.wp('40%'),
          alignItems: 'center',
          justifyContent: 'center',
          borderRightColor: theme.mainColor,
          borderRightWidth: 2,
          borderLeftColor: theme.mainColor,
          borderLeftWidth: 2,
          borderColor: theme.black,
          borderWidth: 0.2,
        }}
        onPress={props.onPress}>
        <Text
          style={{
            color: theme.black,
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
