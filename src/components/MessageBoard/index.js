import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const MessageBoard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ligula nunc, iaculis id condimentum id, accumsan id est. Vestibulum
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default MessageBoard;
