import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const MessageBoard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ligula nunc, iaculis id condimentum id, accumsan id est. Vivamus ornare
        mi sit amet leo tristique, non suscipit lectus interdum. Nullam
        tincidunt metus felis, sed laoreet sem consequat in. Maecenas
        consectetur et quam sed condimentum.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default MessageBoard;
