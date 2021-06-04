import React, { useState, useEffect } from 'react'
import { InteractionManager } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function Products() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        //HTTP GET
        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => {

                setProducts(data);

            })

    }, [])

    return (
        <View>

                {
                    products.map((item) => (

                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.quantityPerUnit}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.categoryId}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    ))
                }

        </View>
    )
}