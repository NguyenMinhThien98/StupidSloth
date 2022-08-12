import { Dimensions } from "react-native";


export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const reponsiveWidht = (value) => {
    let result;
    if(typeof value == 'number'){
        return result = value * width / 100
    }else {
        return
    }
}

export const reponsiveHeight = (value) =>  {
    let result;
    if(typeof value == 'number'){
        return result = value * height / 100
    }else {
        return
    }
}

export default {reponsiveWidht, reponsiveHeight}