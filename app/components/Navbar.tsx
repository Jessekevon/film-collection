import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Home</a>
        </Link>
        <Link href="/collection" legacyBehavior>
          <a className="ml-4">Collection</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
