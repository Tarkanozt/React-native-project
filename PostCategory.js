import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Input } from 'react-native-elements';

const PostCategory = () => {

  const [categoryName, setCategoryName] = useState('')
  const [description, setDescription] = useState('')


const send = () => {

    let requestoptions = {
        method:'POST',
        body:JSON.stringify({name : categoryName, description : description}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
           }
      }

      fetch('https://northwind.vercel.app/api/categories', requestoptions)
            .then((res) => res.json())
            .then((data) => {

                alert('Success');
                

            })
}


  return (
    <View>
        <Input 
              placeholder= 'Category Name'  
              onChangeText={value => setCategoryName(value)}
        
        />

        <Input 
              placeholder= 'Description'  
              onChangeText={value => setDescription(value)}
        
        />
        <Button onPress={() => send()} title='Send' />

        

    </View>

  )
}
export default PostCategory