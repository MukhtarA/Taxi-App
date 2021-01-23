import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap';

const SearchResults = (props) => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default SearchResults;
