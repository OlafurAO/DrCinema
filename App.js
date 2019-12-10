import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
