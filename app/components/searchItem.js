import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import theme from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-elements';

export default function Item(props) {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {props.name} | {props.title}
      </Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.typeButton} disabled={true}>
            <Text style={styles.type}>{props.account}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.typeButton,
              backgroundColor: theme.mainColor,
              marginLeft: 10,
            }}
            onPress={props.onPress}>
            <Text style={styles.type}>MyPage™</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Rating
            readonly
            style={{}}
            imageSize={20}
            ratingCount={5}
            startingValue={props.rating}
          />
          <TouchableOpacity onPress={props.onReviewPress}>
            <Text style={styles.review}>{props.reviews} Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconView}>
        <Text style={{...styles.item, color: theme.greyDarker}}>
          {props.serviceName}
        </Text>
      </View>

      <View style={styles.iconView}>
        <IonIcon
          name="location-outline"
          style={{...styles.icon, color: '#45D598'}}
        />
        <Text style={{...styles.item, color: '#45D598'}}>
          {props.distance} miles away
        </Text>
      </View>
      <View style={styles.iconView}>
        <IonIcon
          name="location-outline"
          style={{...styles.icon, color: theme.greyDarker}}
        />
        <Text
          style={{...styles.item, color: theme.greyDarker}}
          numberOfLines={2}>
          {props.location}
        </Text>
      </View>
      <View style={styles.iconView}>
        <IonIcon
          name="call-outline"
          style={{...styles.icon, color: theme.greyDarker}}
        />
        <Text style={{...styles.item, color: '#327BB7'}}>{props.contact}</Text>
      </View>
      <View style={styles.iconView}>
        <IonIcon
          name="mail-outline"
          style={{...styles.icon, color: theme.greyDarker}}
        />
        <Text style={{...styles.item, color: '#327BB7'}}>{props.email}</Text>
      </View>
      <Text style={styles.detail}>{props.detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingBottom: 10,
    // borderColor: 'red',
    // borderWidth: 2,
    borderBottomColor: theme.dividerColor,
    borderBottomWidth: 2,
  },
  name: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 18,
    color: '#327BB7',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  type: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 14,
    color: theme.white,
    fontWeight: 'bold',
  },
  review: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#327BB7',
    marginLeft: 10,
  },
  typeButton: {
    backgroundColor: '#45D598',
    padding: 5,
    borderRadius: 5,
  },
  icon: {
    fontSize: 20,
  },
  item: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  detail: {
    fontFamily: theme.fontFamilyMedium,
    fontSize: 14,
    color: theme.greyDarker,
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
