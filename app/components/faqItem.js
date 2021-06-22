import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import HTML from 'react-native-render-html';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
    // paddingBottom: 10,
    borderTopColor: theme.dividerColor,
    borderTopWidth: 1,
    borderBottomColor: theme.dividerColor,
    borderBottomWidth: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },

  title: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 16,
    color: theme.black,
    // fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
});
