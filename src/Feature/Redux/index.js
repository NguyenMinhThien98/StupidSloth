import React from "react";
import {SafeAreaView,View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { increment } from "./slice";

const TestRedux = () => {
    const dispatch = useDispatch();
   return (
    <SafeAreaView style={styles.container}>
        <View style={styles.boxHeader}>
            <Text style={styles.txtText}>Test</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
            <Text style={styles.txtbutton}>
                Count
            </Text>
        </TouchableOpacity>
    </SafeAreaView> 
   )
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10   
    },

    txtbutton: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: '500',
    },

    button: {
        width: '35%',
        height: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'red',
    },

    txtText: {
        color: '#0000',
        fontSize: 16,
        fontWeight: '500',
        
    }
});

export default TestRedux;