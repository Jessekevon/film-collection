"use client";
import React from 'react';

interface SearchResult {
  id: number;
  title: string;
  poster_path: string;
}

interface Props {
  results: SearchResult[];
}

const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
      {results.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <p className="mt-2 font-bold">{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
