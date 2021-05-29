import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Fetchdata from './Fetchdatafolder/Fetchdata';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categorynavigation from './Navigationfolder/Categorynavigation';
import Ordernavigation from './Navigationfolder/Ordernavigation';
import Productnavigation from './Navigationfolder/Productnavigation';

export default function App({ navigation }) {

  const Stack = createStackNavigator();


  function Hello() {

    alert("Hello User")
  }

  return (


    <View style={{ flex: 8, padding: 40 }}>

      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Category" component={Categorynavigation} />
            <Stack.Screen name="Order" component={Ordernavigation} />
            <Stack.Screen name="Product" component={Productnavigation} />
          </Stack.Navigator>
        </NavigationContainer>

      </View>


      <View style={{ flex: 2 }}>
        <Text h1 style={{ textAlign: 'center', justifyContent: 'center' }}>Welcome to my App</Text>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        <Text h4 style={{ textAlign: 'center', color: 'red' }}> Please choose one option! </Text>
      </View>
      {/*<Icon name= 'face'/>*/}

      {/* 1. Box */}
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => goCategory()}>
          <View style={styles.button1} >
            <Text style={styles.buttonText}> Products </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2. Box */}
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => Hello()}>
          <View style={styles.button2} >
            <Text style={styles.buttonText}> Categories </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 3. Box */}
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => Hello()}>
          <View style={styles.button3} >
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
    margin: 10,
  },
  button2: {
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'purple',
    margin: 10,
  },
  button3: {
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  }
});