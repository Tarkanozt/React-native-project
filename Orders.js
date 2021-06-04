import React, { useState, useEffect } from 'react'
import { InteractionManager } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function Orders() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {

        //HTTP GET
        fetch('https://northwind.vercel.app/api/orders')
            .then((res) => res.json())
            .then((data) => {

                setOrders(data);

            })

    }, [])

    return (
        <View>

                {
                    orders.map((item) => (

                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.shipName}</ListItem.Title>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    ))
                }

        </View>
    )
}