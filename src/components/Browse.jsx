import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Main from './Main'
import Secondary from './Secondary'
import useTrendingMovie from '../hooks/useTrendingMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const selector=useSelector(state=>state.gpt.gptFlag)
  useNowPlayingMovies();
  useTrendingMovie();


  return (
    <div className=''>
        
      <Header/>
      {selector ?  <GptSearch/> : (
        <>
        <Main/>
      <Secondary/>
      </>
      ) }
    
      
    </div>
  )
}

export default Browse
