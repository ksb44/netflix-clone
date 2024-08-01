import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptFlag:false
    },
    reducers:{

        setGpt(state,action){
            state.gptFlag=!state.gptFlag
            },

    }
})

export const {setGpt}=GptSlice.actions
export default GptSlice.reducer