import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Ordernavigation({navigation}) {


    return (
        <View>

            <Text> Order </Text>
            <Button onPress={() => goOrder()} title='Go to Order'> Go to Order</Button>

        </View>
    )
}