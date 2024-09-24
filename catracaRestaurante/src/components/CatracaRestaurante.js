import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContadorRestaurante = () => {
  const [contadorPessoa, setContadorPessoa] = useState(0);
  const [modoClaro, setModoClaro] = useState(true);

  const adicionarPessoa = () => {
    setContadorPessoa(prevContador => prevContador + 1);
  };

  const removerPessoa = () => {
    setContadorPessoa(prevContador => (prevContador > 0 ? prevContador - 1 : 0));
  };

  const limparContador = () => {
    setContadorPessoa(0);
  };

  const alternarModo = () => {
    setModoClaro(prevModo => !prevModo);
  };

  return (
    <View style={modoClaro ? styles.containerClaro : styles.containerEscuro}>
      <Text style={styles.zVerde}>Z</Text>
      <Text style={modoClaro ? styles.tituloClaro : styles.tituloEscuro}>Contador Restaurante</Text>
      <TouchableOpacity onPress={alternarModo} style={styles.botaoModo}>
        <Icon name={modoClaro ? "weather-sunny" : "weather-night"} size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={modoClaro ? styles.cardClaro : styles.cardEscuro}>
        <Text style={modoClaro ? styles.contadorClaro : styles.contadorEscuro}>{contadorPessoa} pessoas</Text>
        <View style={styles.botoesContainer}>
          <TouchableOpacity onPress={removerPessoa} style={styles.botaoRemover}>
            <Icon name="minus-circle" size={50} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={adicionarPessoa} style={styles.botaoAdicionar}>
            <Icon name="plus-circle" size={50} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={limparContador} style={styles.botaoLimpar}>
          <Text style={styles.textoLimpar}>Limpar Contador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerClaro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  containerEscuro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2937',
    padding: 20,
  },
  zVerde: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#22C55E',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  tituloClaro: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 40,
  },
  tituloEscuro: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 40,
  },
  cardClaro: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardEscuro: {
    backgroundColor: '#374151',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
    width: '80%',
  },
  contadorClaro: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FF4500',
    marginBottom: 20,
  },
  contadorEscuro: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FF6F61',
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  botaoAdicionar: {
    backgroundColor: '#22C55E',
    borderRadius: 30,
    padding: 10,
  },
  botaoRemover: {
    backgroundColor: '#EF4444',
    borderRadius: 30,
    padding: 10,
  },
  botaoLimpar: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textoLimpar: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoModo: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#1E40AF',
    borderRadius: 30,
    padding: 10,
  },
});

export default ContadorRestaurante;
