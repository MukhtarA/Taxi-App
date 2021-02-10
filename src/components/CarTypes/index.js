import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import styles from './styles';
import CarTypeRow from '../CarTypeRow';
import types from '../../assets/data/types';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CarTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      {types.map((type) => (
        <CarTypeRow type={type} key={type.id} />
      ))}

      <Pressable style={styles.confirmButton} onPress={confirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </Pressable>
    </View>
  );
};

export default CarTypes;
