import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black-800 p-4 text-white w-full border-b border-gray-100">
      <div className="container mx-auto">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Home</a>
        </Link>
        <Link href="/collection" legacyBehavior>
          <a className="ml-4">Collection</a>
        </Link>
        <Link href="/releases" legacyBehavior>
          <a className="ml-4">4K Releases</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
