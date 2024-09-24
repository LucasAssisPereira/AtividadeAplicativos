// src/Cronometro.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cronometro = () => {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let timerId;
    if (ativo) {
      timerId = setInterval(() => {
        setTempo(prevTempo => prevTempo + 10);
      }, 10);
    }
    return () => clearInterval(timerId);
  }, [ativo]);

  const iniciarCronometro = () => setAtivo(true);
  const pausarCronometro = () => setAtivo(false);
  const reiniciarCronometro = () => {setAtivo(false);setTempo(0);};

  const tempoFormatado = () => {
    const minutos = String(Math.floor((tempo / 60000) % 60)).padStart(2, '0');
    const segundos = String(Math.floor((tempo / 1000) % 60)).padStart(2, '0');
    const milissegundos = String(Math.floor((tempo % 1000) / 10)).padStart(2, '0');
    return `${minutos}:${segundos}:${milissegundos}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cronômetro</Text>
      <View style={styles.card}>
        <Text style={styles.tempo}>{tempoFormatado()}</Text>
        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={pausarCronometro} style={styles.botaoPausar}>
            <Text style={styles.textoBotao}>Pausar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reiniciarCronometro} style={styles.botaoReiniciar}>
            <Text style={styles.textoBotao}>Reiniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={iniciarCronometro} style={styles.botaoIniciar}>
            <Text style={styles.textoBotao}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB', // gray-200
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E40AF', // blue-800
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF', // white
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  tempo: {
    fontSize: 48,
    fontWeight: '800', // font-extrabold
    color: '#1E40AF', // blue-800
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  botaoIniciar: {
    backgroundColor: '#22C55E', // green-600
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  botaoPausar: {
    backgroundColor: '#EF4444', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  botaoReiniciar: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textoBotao: {
    color: '#FFFFFF', // text-white
    fontSize: 18,
    fontWeight: '600', // font-semibold
  },
});

export default Cronometro;
