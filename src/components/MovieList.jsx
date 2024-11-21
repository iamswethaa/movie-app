import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = ({ selectMovie }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-200 p-4 rounded shadow cursor-pointer"
          onClick={() => selectMovie(movie)}
        >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
        <h2 className="text-center mt-2 font-bold">{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
