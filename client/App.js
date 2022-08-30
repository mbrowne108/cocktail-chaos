import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CocktailContainer from './Components/CocktailContainer';

export default function App() {
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
      .then(r => r.json())
      .then(data => setCocktails(data))
  }, [])

  console.log(cocktails)

  return (
    <View style={styles.container}>
      <CocktailContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
