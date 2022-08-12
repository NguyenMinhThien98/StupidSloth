import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },

    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    button: {
        padding: 20,
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginVertical: 20
    },

    textButton: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    }
});

export default styles