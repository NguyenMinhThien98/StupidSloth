import React from "react";
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from "./style";
import useHomeFacade from "./hooks";
import HeaderBar from "../../Component/HeaderBar";

const Home = () => {

    const { data, onPress, onBack } = useHomeFacade();
    const renderItem = ({ item }) => {
        console.log
        return (

            <TouchableOpacity style={styles.button} onPress={(item) => onPress && onPress(item)}>
                <Text style={styles.textButton}>{item?.name}</Text>
            </TouchableOpacity>


        )
    }
    return (
        <View style={{flex: 1}}>
            <HeaderBar title="Home Screen"/>
            <FlatList
                style={styles.container}
                contentContainerStyle={styles.boxContainer}
                data={data}
                keyExtractor={(item, index) => item + index}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
            />
        </View>



    )
}
export default Home;