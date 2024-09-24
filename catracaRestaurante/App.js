import React from 'react';
import { SafeAreaView } from 'react-native';
import ContadorRestaurante from './src/components/CatracaRestaurante';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContadorRestaurante />
    </SafeAreaView>
  );
};

export default App;
