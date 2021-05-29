import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Categorynavigation({ navigation }) {

     const goCategory = () => {

        navigation.navigate('Category')


    }
    
    return (
        <View>
            <Text> Category </Text>
            <Button onPress={() => goCategory()} title='Go to Category'></Button>

        </View>
    )
    }
