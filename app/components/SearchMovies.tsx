// components/SearchMovies.tsx
"use client";
import React, { useState } from 'react';

interface Movie {
  id: number;
  title: string;
}

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c6589d335c0f9d7f3d59fba6a8ea553&query=${query}`);
    const data = await response.json();

    if (data.results) {
      const moviesData = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
      }));
      setMovies(moviesData);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button onClick={searchMovies}>Search</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;
