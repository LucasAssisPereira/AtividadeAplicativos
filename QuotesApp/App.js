import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import QuotesApp from './src/components/quoteAutomobilistico';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <QuotesApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo para o tema escuro
    justifyContent: 'center',
  },
});
