import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const Fetchpost = () => {

    const [categoryName, setCategoryName] = useState('')

    const [description, setDescription] = useState('')


    const testonChange = (value) => {

        setCategoryName(value);
    }

    const send = () => {

        let requestoptions = {

            method: 'POST',
            body: JSON.stringify({ name: categoryName, description: description }),
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        }
        fetch('https://northwind.vercel.app/api/categories', requestoptions)
            .then((res) => res.json())
            .then((data) => {

                console.log(data);
            })

    }

    return (
        <View>
            <Input
                placeholder='Category Name'
                leftIcon={{ type: 'font-awesome', name: 'categoryname' }}
                onChangeText={value => setCategoryName({ value })}
            />

            <Input
                placeholder='Description'
                leftIcon={{ type: 'font-awesome', name: 'Description' }}
                onChangeText={value => setDescription({ value })}

            />
            <Button title='Send' onPress={() => send()} />

        </View>
    )
}

export default Fetchpost