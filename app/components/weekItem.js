import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity style={styles.button2} onPress={props.onPress}>
          <Text style={styles.count}>{props.count}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    borderTopColor: theme.buttonBorder,
    borderTopWidth: 1,
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button2: {
    backgroundColor: '#7B7B7B',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 90,
    height: 55,
  },
  title: {
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 16,
    color: theme.black,
  },
  count: {
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 16,
    color: theme.white,
  },
});
