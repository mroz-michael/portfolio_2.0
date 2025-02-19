import Link from "next/link";
import { FaHome, FaUser, FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="flex space-x-6">
        <Link href="/" className="flex items-center space-x-1 hover:text-green-400 transition">
          <FaHome size={18} />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-1 hover:text-green-400 transition">
          <FaUser size={18} />
          <span>About</span>
        </Link>
        <Link href="/projects" className="flex items-center space-x-1 hover:text-green-400 transition">
          <FaCode size={18} />
          <span>Projects</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;