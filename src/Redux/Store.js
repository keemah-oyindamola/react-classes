import { configureStore } from "@reduxjs/toolkit";
import Countslice from "./Countslice";
import getuser from "./Getuser";

export default configureStore({
    reducer:{
        Countslice,
        getuser
        
    }
})