import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect start');

    if (originPlace && destinationPlace) {
      console.warn('Redirect to map');
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
