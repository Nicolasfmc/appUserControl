import { StyleSheet, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import Home from './src/pages/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#00b2a6'}/>
        <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3a3a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
