import Navbar from './components/Navbar';
import SearchMovies from './components/SearchMovies'; // Import the SearchMovies component
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My Movie Collection</h1>
          <SearchMovies />
        </div>
      </div>
      <Footer />
    </main>
  )
}
