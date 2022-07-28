import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './Screens';

const Stack = createNativeStackNavigator();

const {HomeScreen} = Screens;
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HomeScreen.name}  component={HomeScreen.component}/>
        </Stack.Navigator>
    )
}

export default Navigation;

