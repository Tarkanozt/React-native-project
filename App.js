import React, {useState, useEffect} from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Navigation from "./Fetchdata"

export default function App() {

function Hello(){

  alert("Hello User")
}

  return (
  
    <View style={{ flex: 8, padding: 40 }}>
      <View style={{ flex: 2}}>
        <Text h1 style={{ textAlign:'center', justifyContent: 'center' }}>Welcome to my App</Text>
      </View>
      
      <View style={{ flex: 1, padding: 10 }}>
        <Text h4 style={{textAlign:'center', color: 'red' }}> Please choose one option! </Text>
      </View>
      {/*<Icon name= 'face'/>*/}

      {/* 1. Box */}
      <View style={{ flex: 2}}>
        <TouchableOpacity onPress = {() =>Hello()}>
        <View style= {styles.button1} >
        <Text style={styles.buttonText}> Products </Text>
        </View>
        </TouchableOpacity>
    </View>

      {/* 2. Box */}
      <View style={{ flex: 2}}>
      <TouchableOpacity onPress = {() =>Hello()}>
        <View style= {styles.button2} >
        <Text style={styles.buttonText}> Categories </Text>
        </View>
        </TouchableOpacity>
      </View>
      {/* 3. Box */}
      <View style={{ flex: 2}}>
      <TouchableOpacity onPress = {() =>Hello()}>
        <View style= {styles.button3} >
        <Text style={styles.buttonText}> Orders </Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    margin:10,
  },
  button2: {
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'purple',
    margin:10,
  },
  button3: {
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    margin:10,
  },
 buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
}
});