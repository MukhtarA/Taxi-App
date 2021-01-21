import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import MessageBoard from '../../components/MessageBoard';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      {/* Home map */}
      <HomeMap />
      {/* Message Board */}
      <MessageBoard />
      {/* Bottom buttons */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
