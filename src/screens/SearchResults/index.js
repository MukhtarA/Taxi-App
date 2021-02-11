import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap';
import {useRoute} from '@react-navigation/native';

const SearchResults = (props) => {
  const route = useRoute();
  console.log(route.params);
  const {originPlace, destinationPlace} = route.params;
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default SearchResults;
