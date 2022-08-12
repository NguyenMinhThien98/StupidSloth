import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const useHomeFacade = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        {name: 'Zustand', screen: "Zustand" },
        {name: 'Zustand', screen: "Zustand" },
        {name: 'Zustand', screen: "Zustand" },
        {name: 'Zustand', screen: "Zustand" },
        {name: 'Zustand', screen: "Zustand" },
    ]);

    const onBack = () => {
        navigation.goBack();
    }
    const onPress = useCallback((item) => {
        navigation.navigate(item?.screen)
    }, [data])


    return { data, onPress, onBack }

}

export default useHomeFacade;