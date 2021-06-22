import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Button(props) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.mainColor,
          borderRadius: 10,
          height: theme.hp('6%'),
          width: theme.wp('15%'),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={props.onPress}>
        <Ionicons name={props.icon} color={theme.white} size={32} />
      </TouchableOpacity>
    </View>
  );
}
