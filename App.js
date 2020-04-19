import * as React from 'react';
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';



export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>200 + 200 =</Text>
        <Text style={styles.resultText}>400</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}><Text style={[styles.textButton, {color: "#ffbf60"}]}>AC</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Del</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>*</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>+/-</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#ffbf60',borderRadius: 50,}]}><Text style={styles.textButton}>=</Text></TouchableOpacity>
       
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  results: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 300,
    backgroundColor: '#e5e5e5',
  },
  resultText:{
    fontFamily: "Roboto-Light",
    fontWeight: '100',
    color: "#5b5b5b",
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText:{
    fontFamily: "Roboto-Thin",
    color: "#5b5b5b",
    fontSize: 20,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  
  buttons:{
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF'
  },
  button:{
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
    minWidth: 80,
    minHeight: 80,

  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25,
  }

});
