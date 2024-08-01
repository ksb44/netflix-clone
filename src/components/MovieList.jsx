import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    if(!movies) return;
  return (
    <div >
<div>
    <h1 className='text-2xl font-bold m-2 p-2 '>{title}</h1>
</div>
<div className='flex overflow-x-scroll m-2 p-2 space-x-5'>
  

       {movies.map((movie)=>{

        return (
            <MovieCard  key={movie.id} poster={movie.poster_path} />
        )
       })}
        

</div>

    </div>
  )
}

export default MovieList