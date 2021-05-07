import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputText from './InputText';
import ViewLayout from './Layout';
import Login from './Login';



const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer >
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='InputText' component={InputText} />
              <Stack.Screen name='Layout' component={ViewLayout} initialParams={{ text: 'Layout View' }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}