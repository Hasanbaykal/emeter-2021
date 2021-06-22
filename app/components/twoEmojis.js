import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Image source={props.emojiOne} style={styles.image} />
        <Text style={styles.title}>{props.emoji1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Image source={props.emojiTwo} style={styles.image} />
        <Text style={styles.title}>{props.emoji2}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginVertical: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  title: {
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 16,
    marginLeft: 20,
    color: theme.black,
  },
  image: {
    height: 40,
    width: 40,
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },

  button2: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
