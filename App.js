//TODO import navigation
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
// TODO insert screens
import Home from './src/screens/home';
import Detail from './src/screens/detail';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component = {Home}/>
        <Stack.Screen name ="Detail" component = {Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
