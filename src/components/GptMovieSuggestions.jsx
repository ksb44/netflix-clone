import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function GptMovieSuggestions() {
    const [movies, setMovies] = useState([]);
    const promptSelector = useSelector(state => state.prompt.prompt);

    useEffect(() => {
        const fetchMovies = async () => {
            const movieTitles = promptSelector.split(',').map(title => title.trim());

            const movieRequests = movieTitles.map(title =>
                fetch(`https://www.omdbapi.com/?apikey=d0c17da5&t=${encodeURIComponent(title)}`)
                    .then(response => response.json())
            );

            try {
                const movieData = await Promise.all(movieRequests);
                const validMovies = movieData.filter(data => data.Poster);
                setMovies(validMovies);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        if (movies.length === 0) {
            fetchMovies();
        }
    }, [promptSelector, movies]);

    return (
        <div>
            <div className='bg-white mx-20 rounded-2xl my-4'>
                <p className='px-4 py-4'>{promptSelector}</p>
            </div>
            <div className='mx-24 hover:border-2 bg-inherit p-4 flex justify-between h-80'>
                {movies.map((movie, index) => (
                    <MovieCard key={index} poster={movie.Poster} />
                ))}
            </div>
        </div>
    );
}

export default GptMovieSuggestions;
