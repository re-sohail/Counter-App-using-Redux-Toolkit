import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value : 0
    },
    reducers: {
        increment: (state, actions)=>{
            // console.log(JSON.stringify(state));
            // console.log(actions);

            state.value = state.value + 1
        },
        decrement: (state, actions)=>{
            state.value = state.value -1
        },
        reset: (state, actions)=>{
            state.value = state.value * 0
        }
    }

})

export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer