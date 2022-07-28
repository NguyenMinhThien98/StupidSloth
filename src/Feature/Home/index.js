import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';


const Home = () => {
    const [isMove, setMove] = useState(null);
    const [isRotate, setRotate] = useState(null);
    const moveAnimValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const rotateAnimValue = useRef(new Animated.Value()).current;

    useEffect(() => {
        if (isMove) {
            console.log('--animated');
            Animated.timing(moveAnimValue, {
                toValue: { x: 200, y: 200 },
                duration: 1000,

            }).start();
        }

        if(isRotate){
            console.log('--Rotate');
            RotateAnimation();
        
        }
    }, [isMove, isRotate]);

    const RotateAnimation = () => {
        Animated.sequence([
            Animated.timing(rotateAnimValue,{
                toValue: 100,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(rotateAnimValue,{
                toValue: 0,
                duration: 0,
                useNativeDriver: true
            })
        ]).start(
            () => RotateAnimation()
        )
    }

    const interPoleRotateValue = rotateAnimValue.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.square, {
                transform: [{
                    translateY: moveAnimValue.y
                }, {
                    translateX: moveAnimValue.x
                }]
            }]} />

            <Animated.View style={[styles.square1, { transform: [{ rotate: interPoleRotateValue}] }]} />

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btn} onPress={() => setMove(true)}>
                    <Text style={styles.txtbtn}>
                        Move
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => setRotate(true)}>
                    <Text style={styles.txtbtn}>
                        Rotate
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'blue',
        borderWidth: 1,
        position: 'absolute',
        top: 30
    },

    square1: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'red',
        borderWidth: 1,
        position: 'absolute',
        top: 30
    },

    btn: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },

    txtbtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default Home;