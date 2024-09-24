// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Cronometro from './src/components/cronometroComponent';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Cronometro />
    </>
  );
}
