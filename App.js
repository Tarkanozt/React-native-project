import React, {useState, useEffect} from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './Products';
import Categories from './Categories';
import Orders from './Orders';
import {Home} from './Home';
import PostCategory from './PostCategory';



const Stack = createStackNavigator();

export default function App() {


  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="PostCategory" component={PostCategory} />   
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
