import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';

axios.defaults.baseURL = 'http://172.16.2.54:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function login(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const checkLogin = async () => {
        const jsonBody = JSON.stringify({
          "email": email,
          "password": password
        });
        console.log(jsonBody);
        await axios.post('/users/login', jsonBody)
        .then(function (res) {
          console.log(res)
          if(res){
            const status = res.status;
            if(status === 200){
              const age = res.data.age;
              props.navigation.navigate({name:'Layout', params: {text : age, id : res.data.id}});
            } else {
              console.log('failed status')
            }
          }
        })
        .catch(function (error) {
          setMessage('User name or password failed!');
        });
    };

    return (
        <View style={styles.container}>
      <Text style={styles.inputext}>Welcome to Hell :)</Text>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
           label='Email'
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Login'}
          style={styles.input}
          onPress={checkLogin}
        />
        <Text>{message}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00FFFF',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      marginBottom: 10,
    },
  });