import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  function goToStatus() {
    navigation.navigate('Status');
  }
  
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={goToStatus}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}