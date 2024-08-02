import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

function GptMovieSuggestions() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [promptSelector]);

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className='bg-gray-500 md:bg-transparent '>
      <div className="bg-white mx-4 md:mx-20 rounded-2xl my-5 p-4">
        <p className="text-lg">{promptSelector}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mx-4 md:mx-24">
        {movies.map((movie, index) => (
          <MovieCard key={index} poster={movie.Poster} />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions;
