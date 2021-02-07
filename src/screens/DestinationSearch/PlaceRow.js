import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './styles';

const PlaceRow = ({data}) => {
  return (
    <View style={style.row}>
      <View style={style.iconContainer}>
        <Entypo name="location-pin" color="white" size={20} />
      </View>
      <Text style={style.locationText}>{data.description}</Text>
    </View>
  );
};

export default PlaceRow;
