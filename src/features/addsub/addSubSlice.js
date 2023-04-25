import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:99
}

export const addSubSlice = createSlice({
    name:'addsub',
    "initialState":initialState,
    reducers:{
        //P:V
        addbyone:(state)=>{
            console.log('addbyone')
        },
        'reset':{},
        'subbyone':{},
    }
});

export const selectCount = (state)=> {
    console.log(state);
    return state.addSub.value;
}

export default addSubSlice.reducer;