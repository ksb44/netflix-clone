import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const languageSlice=createSlice({
    name:"language",
    initialState:{
        lang:"en"
    },
    reducers:{
        setLanguage(state,action){

            state.lang=action.payload
        },

    }

})

export const {setLanguage}=languageSlice.actions;
export default languageSlice.reducer