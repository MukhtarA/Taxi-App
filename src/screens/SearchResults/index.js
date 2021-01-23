import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CarTypes from '../../components/CarTypes';

const SearchResults = (props) => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      {/* Home map */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default SearchResults;
