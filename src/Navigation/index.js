import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './Screens';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Home from '../Feature/Home';
import TestRedux from '../Feature/Redux';



const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'TestRedux'} component={TestRedux} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Navigation;

