import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-elements';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Rating
          readonly
          style={{}}
          imageSize={20}
          ratingCount={5}
          startingValue={props.rating}
        />
        <Text style={styles.review}>{props.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Text>By </Text>
        <Text style={styles.name}>{props.name}</Text>
        <Text> via</Text>
        <Text> ({props.type}) </Text>
      </View>
      <View style={styles.iconView}>
        <Text style={styles.item}>{props.review}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: theme.dividerColor,
    borderBottomWidth: 2,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  review: {
    fontFamily: theme.fontFamilyBold,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#327BB7',
    marginLeft: 10,
  },
  item: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    color: theme.greyDarker,
  },
  name: {
    fontFamily: theme.fontFamilyRegular,
    fontWeight: 'bold',
    color: '#327BB7',
  },
  iconView: {
    marginTop: 20,
  },
});
