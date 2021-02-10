import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {useRoute} from '@react-navigation/native';

const RouteMap = (props) => {
  const API_KEY = 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg';
  const route = useRoute();
  const origin = {
    latitude: route.params.destinationPlace.data.geometry.location.lat,
    longitude: route.params.destinationPlace.data.geometry.location.lng,
  };
  const destination = {
    latitude: route.params.originPlace.data.geometry.location.lat,
    longitude: route.params.originPlace.data.geometry.location.lng,
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7e8',
      }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: route.params.originPlace.data.geometry.location.lat,
          longitude: route.params.originPlace.data.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API_KEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker coordinate={origin} title={'Origin'} />
        <Marker coordinate={destination} title={'Destination'} />
      </MapView>
    </View>
  );
};

export default RouteMap;
