const Hero: React.FC = () => {
  return (
    <section className="hero bg-gray-800 p-4 text-white fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto">
        <ul>
            <li><a href="#">Lists</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">About</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
