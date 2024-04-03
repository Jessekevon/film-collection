import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface MovieDetails {
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  release_date: string;
  production_companies: { id: number; name: string }[];
  credits: {
    cast: { id: number; name: string }[];
  };
}

const FilmDetailsPage: React.FC = () => {
  const router = useRouter();
  const { filmId } = router.query;

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=3c6589d335c0f9d7f3d59fba6a8ea553&language=en-US`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (filmId) {
      fetchMovieDetails();
    }
  }, [filmId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    vote_average,
    vote_count,
    genres,
    release_date,
    production_companies,
    credits,
  } = movieDetails;

  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
      <p>Rating: {vote_average} ({vote_count} votes)</p>
      <h2>Genres:</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h2>Production Companies:</h2>
      <ul>
        {production_companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
      <h2>Cast:</h2>
      <ul>
        {credits.cast.slice(0, 5).map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      {/* Add more information as needed */}
    </div>
  );
};

export default FilmDetailsPage;
