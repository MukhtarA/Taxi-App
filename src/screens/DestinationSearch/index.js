import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import {GooglePlaceData} from 'react-native-google-places-autocomplete';

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
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          enablePoweredByContainer={false}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyATEu3fPvgqTOjXP2m_4xWh5WSKTYi2aMg',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          enablePoweredByContainer={false}
        />

        {/* Circle near first input */}
        <View style={styles.circle}>

        </View>
        {/*  Line */}
        <View style={styles.line}>

        </View>
        {/* Square near second input */}
        <View style={styles.square}>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
