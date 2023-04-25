import { configureStore } from "@reduxjs/toolkit";
import  addSubReducer from "../features/addsub/addSubSlice";


export const store = configureStore({
    reducer:{
        //1. P:V

        //2. Method
        addSub:addSubReducer,
    },
})