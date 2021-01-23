import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import MessageBoard from '../../components/MessageBoard';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      {/* Home map */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      {/* Message Board */}
      <MessageBoard />
      {/* Bottom buttons */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
