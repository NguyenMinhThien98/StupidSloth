import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const slice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },

        decrement(state) {
            state.value -= 1
        },

        incrementAmount(state, action){
            state.value += action.payload 
        },
        decrementAmount(state, action){
            state.value -= action.payload;
        }
    }
});

export default slice.reducer;
export const {increment, decrement, incrementAmount, decrementAmount} = slice.actions;


