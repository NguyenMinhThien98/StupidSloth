import React from "react";
import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native';
import styles from "./style";
import useHomeFacade from "./hooks";
import HeaderBar from "../../Component/HeaderBar";

const Home = () => {

    const { data, onPress, onBack } = useHomeFacade();
    const renderItem = ({ item }) => {
        console.log('--data', item);
        return (
            <TouchableOpacity style={styles.button} onPress={() => onPress && onPress(item)}>
                <Text style={styles.textButton}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar title="Home Screen" />
            <FlatList
                style={styles.container}
                contentContainerStyle={styles.boxContainer}
                data={data}
                key={(item, index) => item + index}
                keyExtractor={(index) =>  index}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
            />
        </View>



    )
}
export default Home;