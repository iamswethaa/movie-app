import { useState } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <MovieList selectMovie={setSelectedMovie} />
        </div>
        <div className="col-span-1">
          <MovieDetails movie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default App;