import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

axios.defaults.baseURL = 'http://172.16.2.54:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function ViewLayout({route, navigation }){
    const [value, setValue] = useState('View Layout');
    const [users, setUsers] = useState();

    useEffect(() => {
        route.params?.text !== '' ? setValue(route.params.text) : setValue(value);
    })

    useEffect(() => {
      setUsers(getListUser());
    },[])

    const getListUser = async () => {
      await axios.get('/users/list-all')
      .then(function (res) {
        if(res){
          setUsers(res.data);
          console.log(users)
        }
      })
      .catch(function (error) {
        console.log(error)
      });
  };

    return (
      <View style={styles.container}>
        <FlatList
          data = {users}
          renderItem = {({item}) => <Text style={styles.item}>{item.email} and {item.age}</Text>}
        />
        <Text defaultValue={value} >{value}</Text>
        <Button 
          color='#ffc0cb'
          title='Press Here'
          onPress={() => navigation.navigate('InputText') }
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
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });