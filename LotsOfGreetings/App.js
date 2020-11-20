import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greetings = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings: () => React$Node = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greetings name='Rexxar' />
      <Greetings name='Jaina' />
      <Greetings name='Valeera' />
    </View>
  );
};

export default LotsOfGreetings;
