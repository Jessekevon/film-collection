// components/SearchMovies.tsx
"use client";
import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMoviesData = async (query: string) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c6589d335c0f9d7f3d59fba6a8ea553&query=${query}`);
      const data = await response.json();

      if (data.results) {
        const moviesData = data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
        }));
        setMovies(moviesData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (query) {
      searchMoviesData(query);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie"
          className="p-2 rounded border border-gray-300 flex-grow"
        />
        <button onClick={() => searchMoviesData(query)} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {movies.length > 0 && <SearchResults results={movies} />}
    </div>
  );
};

export default SearchMovies;
