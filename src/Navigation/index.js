import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './Screens';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const { HomeScreen } = Screens;
const Navigation = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={HomeScreen.name} component={HomeScreen.component} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Navigation;

