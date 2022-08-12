import React from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Screen } from '../../Constand'
import { useNavigation } from '@react-navigation/native';


const { reponsiveHeight } = Screen;
const sourceBackground = require('../../../assets/background.png');
const HeaderBar = ({ title = 'Title', goBack, onPRess }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={sourceBackground} style={styles.boxContainer}>
                <TouchableOpacity style={styles.boxBackbutton}>
                    <Text style={styles.txtButton}>Go Back</Text>
                </TouchableOpacity>
                <View style={styles.boxTitle}>

                    <Text style={styles.txtTitle}>{title}</Text>
                </View>
                <View style={styles.boxTitle}></View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: reponsiveHeight(5.5),
        position: 'absolute', 
        zIndex: 1
    },

    boxContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',

    },

    boxBackbutton: {
        width: "20%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxTitle: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

    txtButton: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000656'
    }


})

export default HeaderBar;