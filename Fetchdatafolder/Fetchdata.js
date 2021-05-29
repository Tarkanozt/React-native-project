import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, InteractionManager } from 'react-native';
import { Icon, Text, ListItem } from 'react-native-elements';

const Fetchdata = () => {

  const [categories, setcategories] = useState([])

  useEffect(() => {

    fillData();

  }, [])

  const fillData = () => {

    fetch('https://northwind.vercel.app/api/categories')
      .then((res) => res.json())
      .then((data) => {

        setcategories(data);

      })

  }


  const deleteCategory = (id) => {

    let requestoptions = {

      method: 'DELETE',
      body: JSON.stringify({ id: id })
    }

    fetch('https://northwind.vercel.app/api/categories' + id, requestoptions)
      .then((res) => res.json())
      .then((data) => {

        fillData();
      }
      )
  }

  return (

    <View>

      {
        categories.map((item) => (



          <ListItem>
            <ListItem.Content>
              <ListItem.Title> {item.name} </ListItem.Title>
              <ListItem.Subtitle> {item.description} </ListItem.Subtitle>

              <Icon name="delete" onPress={() => deleteCategory(item.id)} />
            </ListItem.Content>
          </ListItem>
        ))

      }

    </View>

  )
}

export default Fetchdata