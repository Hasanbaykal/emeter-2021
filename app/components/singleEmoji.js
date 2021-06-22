import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.count}>{props.count}</Text>
        <Image source={props.emoji} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 10,
    paddingTop: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    borderTopColor: theme.buttonBorder,
    borderTopWidth: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  title: {
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 16,
    color: theme.black,
  },
  count: {
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 14,
    marginTop: 15,
    paddingTop: 10,
    color: theme.black,
  },
  image: {
    height: 40,
    width: 40,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // borderColor: 'green',
    // borderWidth: 2,
  },
});
