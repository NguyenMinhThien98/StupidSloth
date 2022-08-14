import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';


const useHomeFacade = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        {name: 'TestRedux'},
    ]);
    


    const onBack = () => {
        navigation.goBack();
    }

    const onPress = (item) => {
        console.log('--item', item?.name);
        navigation.navigate(`${item?.name}`);
        
    
    }

    return { data, onPress, onBack }

}

export default useHomeFacade;