const MovieDetails = ({ movie }) => {
    if (!movie) return <div className="p-4">Select a movie to see details</div>;
  
    return (
      <div className="p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
        <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>
        <p className="mt-2 font-semibold">Rating: {movie.vote_average}</p>
        <p className="mt-2 font-semibold">Release Date: {movie.release_date}</p>
      </div>
    );
  };
  
  export default MovieDetails;
