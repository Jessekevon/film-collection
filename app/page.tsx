import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentlyPlayingMovies from './components/CurrentlyPlayingMovies';
// import NowStreamingMovies from './components/NowStreamingMovies'; // Import the component

import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto">
          <Hero />
        </div>
      </div>
      <CurrentlyPlayingMovies />
      {/* <NowStreamingMovies /> */}
      <Footer />
    </main>
  )
}
