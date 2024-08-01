
import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../components/userSlice'
import movieReducer from '../components/movieSlice'
import GptReducer from '../components/GptSlice'
import LanguageReducer from '../components/LanguageSlice'
import PromptReducer from '../components/PromptSlice'

export const store=configureStore({
    reducer:{

        user:userReducer,
        movies:movieReducer,
        gpt:GptReducer,
        language:LanguageReducer,
        prompt:PromptReducer
    }
})