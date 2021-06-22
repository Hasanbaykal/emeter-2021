import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MainHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}></Text>
      <Text style={styles.dummyText}>AA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.mainColor,
    height: 50,
    padding: 10,
  },
  headerText: {
    // flex: 2,
    fontSize: 20,
    color: theme.white,
    fontWeight: 'bold',
  },
  dummyText: {
    // flex: 2,
    fontSize: 20,
    color: theme.mainColor,
    fontWeight: 'bold',
  },
});
