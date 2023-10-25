import Navbar from './components/Navbar';
import SearchMovies from './components/SearchMovies';
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <SearchMovies />
    </main>
  )
}
