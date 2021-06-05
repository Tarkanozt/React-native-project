import React, { useState, useEffect } from 'react'
import { InteractionManager } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

export default function Categories() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {

        //HTTP GET
        fetch('https://northwind.vercel.app/api/categories/')
            .then((res) => res.json())
            .then((data) => {

                setCategories(data);

            })

    }, [])

    const deleteCategory = (id) => {

      let requestoptions = {
        method:'DELETE',
        body:JSON.stringify({id: id})
      }

      fetch('https://northwind.vercel.app/api/categories/' + id, requestoptions)
            .then((res) => res.json())
            .then((data) => {

              fetch('https://northwind.vercel.app/api/categories/')
              .then((res) => res.json())
              .then((data) => {

                setCategories(data);

            })

                

            })
    }

    return (
      
        <View>

                {
                    categories.map((item) => (

                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>

                                <Icon name='delete' onPress= {() => deleteCategory(item.id)}/>

                            </ListItem.Content >
                        </ListItem>

                    ))
                }

        </View>
    )
}