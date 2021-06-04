import React, { useState, useEffect } from 'react'
import { InteractionManager } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function Categories() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {

        //HTTP GET
        fetch('https://northwind.vercel.app/api/categories')
            .then((res) => res.json())
            .then((data) => {

                setCategories(data);

            })

    }, [])

    return (
      
        <View>

                {
                    categories.map((item) => (

                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                            </ListItem.Content >
                        </ListItem>

                    ))
                }

        </View>
    )
}