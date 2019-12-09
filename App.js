import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header/Header';
import Main from './src/components/Main/Main';

import AppContainer from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
