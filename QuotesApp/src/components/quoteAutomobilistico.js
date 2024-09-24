import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import quotesData from '../data/quotes.json';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteHistory, setQuoteHistory] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(-1);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme

  const getRandomQuoteIndex = () => {
    return Math.floor(Math.random() * quotesData.quotes.length);
  };

  const getRandomQuote = () => {
    if (quoteIndex < quoteHistory.length - 1) {
      setQuoteHistory(quoteHistory.slice(0, quoteIndex + 1));
    }
    const randomIndex = getRandomQuoteIndex();
    setQuoteHistory(prevHistory => [...prevHistory, randomIndex]);
    setQuoteIndex(quoteIndex + 1);
    setCurrentIndex(randomIndex);
  };

  const goBackQuote = () => {
    if (quoteIndex > 0) {
      const newIndex = quoteIndex - 1;
      setQuoteIndex(newIndex);
      setCurrentIndex(quoteHistory[newIndex]);
    }
  };

  const goForwardQuote = () => {
    if (quoteIndex < quoteHistory.length - 1) {
      const newIndex = quoteIndex + 1;
      setQuoteIndex(newIndex);
      setCurrentIndex(quoteHistory[newIndex]);
    } else {
      getRandomQuote();
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const currentQuote = quotesData.quotes[currentIndex];

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>{isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quotes de Automobilismo</Text>
      </View>
      {currentQuote && (
        <>
          <Image source={{ uri: currentQuote.image }} style={styles.image} />
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>“{currentQuote.quote}”</Text>
            <Text style={styles.author}>- {currentQuote.author}</Text>
          </View>
        </>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: isDarkTheme ? '#4B5563' : '#000' }]} onPress={goBackQuote} disabled={quoteIndex <= 0}>
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: isDarkTheme ? '#4B5563' : '#000' }]} onPress={goForwardQuote}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  lightContainer: {
    backgroundColor: '#E5E7EB',
  },
  titleContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    letterSpacing: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#000',
    borderWidth: 3,
  },
  quoteContainer: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  quote: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  themeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  themeButtonText: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
