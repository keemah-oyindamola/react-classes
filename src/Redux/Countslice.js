import { createSlice } from "@reduxjs/toolkit";

const Countslice = createSlice({
    name:"count",
    initialState:{
        posts:[],
        status:'nothing',
        error:null,
        value:0,
        istrue:false
    },
    reducers:{
        Increment:(state)=>{
            state.value += 1
        },
        Decrement:(state)=>{
            if (state.value > 0) {
                state.value -=1
            }
        },
        getuserinfo :(state, actions)=>{

        }   
    }
})

export default Countslice.reducer
export const {Increment, Decrement} = Countslice.actions