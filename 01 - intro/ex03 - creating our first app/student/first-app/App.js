import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container }>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>hello i'm gabriel</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textScroll}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: "#fff",
  },
  textScroll: {
    fontSize: 42,
    color: "#333",
  },
  scrollView: {
    backgroundColor: 'pink',
  },
});
