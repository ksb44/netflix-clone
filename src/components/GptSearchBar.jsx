import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../constants/LanguageConstants';
import { model } from '../utils/Gemini';
import { setPrompt } from './PromptSlice';

function GptSearchBar() {
    const langSelector=useSelector(state=>state.language.lang)
    const searchRef=useRef(null)
    const promptDispatch=useDispatch()
    const handleSearch=async(e)=>{
        e.preventDefault()
        const searchValue="Act as a Movie Recommendation system and suggest so movies for the query : " + searchRef.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don , Golmaal , Koi Mil Gaya"
        try {
            const result = await model.generateContent(searchValue);
            const response = await result.response;
            const text = response.text();
            promptDispatch(setPrompt(text))
        } catch (error) {
            console.log(error)
        }
       
    

    }
    return (
        <div className='w-[60%] mx-auto '>
            <form className='pt-[25%] -mt-[1%]   grid grid-cols-12'>

                <input type="text" ref={searchRef} className='p-4 m-4 col-span-8 rounded-xl md:mt-[33%] my-[80%]' 
                 placeholder={lang[langSelector].gptSearchPlaceholder} 
                />
                <button type='submit' onClick={handleSearch} className='bg-red-600 text-white h-10 md:mt-[90%] my-auto  col-span-3 rounded-2xl'>{lang[langSelector].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;