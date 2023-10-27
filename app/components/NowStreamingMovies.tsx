// "use client";
// // components/NowStreamingMovies.tsx
// import React, { useState, useEffect } from 'react';

// interface Props {
//   movieId: number; // Add movieId prop
// }

// interface MovieStreamingInfo {
//   id: number;
//   title: string;
//   poster_path: string;
//   providers: { provider_id: string; provider_name: string }[];
// }

// const NowStreamingMovies: React.FC<Props> = ({ movieId }) => {
//   const [movies, setMovies] = useState<MovieStreamingInfo[]>([]);

//   useEffect(() => {
//     const fetchNowStreamingMovies = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=3c6589d335c0f9d7f3d59fba6a8ea553`
//         );
//         const data = await response.json();

//         if (data.results) {
//           const moviesData = [
//             {
//               id: data.id,
//               title: data.title,
//               poster_path: data.poster_path,
//               providers: Object.entries(data.providers)
//                 .map(([provider_id, provider_name]) => ({
//                   provider_id,
//                   provider_name,
//                 }))
//                 .filter((provider) => provider.provider_name !== 'unknown'), // Remove unknown providers
//             },
//           ];
//           setMovies(moviesData);
//         }
//       } catch (error) {
//         console.error('Error fetching now streaming movies:', error);
//       }
//     };

//     fetchNowStreamingMovies();
//   }, [movieId]); // Include movieId in the dependencies

//   return (
//     <div className="container mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4">Now Streaming</h2>
//       <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//         {movies.map((movie) => (
//           <div key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt={movie.title}
//               className="w-full h-64 object-cover"
//             />
//             <p className="mt-2 font-bold">{movie.title}</p>
//             <ul>
//               {movie.providers.map((provider) => (
//                 <li key={provider.provider_id}>{provider.provider_name}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NowStreamingMovies;
