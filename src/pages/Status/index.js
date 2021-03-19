import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Status() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Status</Text>
    </View>
  )
}