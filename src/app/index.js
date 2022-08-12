import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Navigation from '../Navigation';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from '../store/Redux/store';
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </Provider>



    )
}

export default App;

