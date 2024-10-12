import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postusers: [],
    isfetching: false,
    error: null
}

export const getuser = createSlice({
    name: "user",
    initialState,
    reducers: {
        pendingfetchdata: (state) => {
            state.postusers = []
                state.isfetching = true
                state.error = null
        },
        sucessfulfetchdata: (state, action) => {
            state.postusers = action.payload
                state.isfetching = false
                state.error = null
        },
        errorfetchdata:(state, action)=>{
            state.postusers = []
            state.isfetching = false
            state.error = action.payload
        }

    }
})
export default getuser.reducer
export const {pendingfetchdata, sucessfulfetchdata, errorfetchdata} = getuser.actions