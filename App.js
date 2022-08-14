import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SourceApp from './src/app';
import { Provider } from 'react-redux';
import {store} from './src/store/Redux/store'

export default function App() {
  return (
    <Provider store={store}>
          <SourceApp/>      
    </Provider>

  );
}