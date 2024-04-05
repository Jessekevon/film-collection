// components/CurrentlyPlayingMovies.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const CurrentlyPlayingMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchCurrentlyPlayingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=3c6589d335c0f9d7f3d59fba6a8ea553&language=en-US&page=1`
        );
        const data = await response.json();

        if (data.results) {
          const moviesData = data.results
            .slice(0, 16) // Get only the first 12 movies
            .map((movie: any) => ({
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
            }));
          setMovies(moviesData);
        }
      } catch (error) {
        console.error('Error fetching currently playing movies:', error);
      }
    };

    fetchCurrentlyPlayingMovies();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl my-20 text-white font-bold mb-4">Now Playing</h2>
      <div className="md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {movies.map((movie) => (
        <Link href={`/films/${movie.id}/`} key={movie.id} legacyBehavior>
          <a>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 text-white text-center font-bold">{movie.title}</p>
            </div>
          </a>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default CurrentlyPlayingMovies;
