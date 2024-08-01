import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND } from '../constants/constants';
import { useSelector } from 'react-redux';
function GptSearch() {
    const promptSelector=useSelector(state=>state.prompt.prompt)

    return (
        <div className=''>
             <div className='absolute -z-10'>
        <img className=' h-full max-w-full' src={BACKGROUND} alt="bg" />
      </div>
            <GptSearchBar/>

           {promptSelector.length!==0?<GptMovieSuggestions/>:<></>} 
        </div>
    )
}
export default GptSearch;