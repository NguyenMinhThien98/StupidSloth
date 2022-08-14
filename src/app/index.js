import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Navigation from '../Navigation';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    return (
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>



    )
}

export default App;

