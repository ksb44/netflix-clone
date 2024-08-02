import React from 'react';
function MovieCard({poster}) {
    return (
        <div className='' >
            <div className='md:h-55 md:w-55  '>

                <img className='max-w-[140px] h-60 rounded-lg hover:border-2 hover:border-red-500' loading='lazy' src={poster} alt='poster'/>
            </div>
        </div>
    )
}
export default MovieCard;