import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {
    const nowPlayingMovies=useSelector(state=>state.movies.nowPlayingMovies)
    const trendingMovies=useSelector(state=>state.movies.trendingMovies)
  return (
  <div className='bg-black text-white md:mt-[2%] mt-[10%]'>
       {nowPlayingMovies && trendingMovies &&   <div className=' -mt-20 relative z-20 pl-12'>
          <MovieList title="Now Playing" movies={nowPlayingMovies}/>
          <MovieList title="Trending" movies={trendingMovies}/>
          <MovieList title="Popular" movies={nowPlayingMovies}/>
          <MovieList title="Upcoming Movies" movies={trendingMovies}/>
          <MovieList title="Horror Movies" movies={nowPlayingMovies}/>
          <MovieList title="Comedy Movies" movies={trendingMovies}/>

          </div>
   }

    </div>
  )
}

export default Secondary
