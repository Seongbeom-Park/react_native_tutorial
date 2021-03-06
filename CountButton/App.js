import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You Clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title='Click me!'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
