import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  const preparedMovies = (moviesList, searchQuery) => {
    if (searchQuery) {
      return moviesList.filter(
        movie =>
          movie.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim()) ||
          movie.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim()),
      );
    }

    return moviesList;
  };

  const visbleMovie = preparedMovies(movies, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchMovie setQuery={setQuery} />

        <MoviesList movies={visbleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
