import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function inputText({navigation}){
    const [text, setText] = useState('');
    const [value, setValue] = useState('');
    useEffect(() => {
      if(text.length > 4){
        setValue(text);
      }
    },[text]);
  
    const changeText = () =>{
      setValue('');
    }

    const pressText = ()=> {
        navigation.navigate({name:'Layout',params: { text: value? value : '' },merge: true})
    }
  
    return (
      <View style={styles.container}>
        <Text defaultValue={value} >{value}</Text>
        <TextInput
          style={
            {height:40,
            width:200,
            backgroundColor:'yellow',
            color: 'black'}
          }
          placeholder="This is Input text"
          defaultValue={text}
          onChangeText={value => setText(value)}
        />
        <Button 
          color='#ffc0cb'
          title='Press Here'
          onPress={changeText}
        />
        <Button 
          color='#800000'
          title='pass'
          onPress={pressText}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });