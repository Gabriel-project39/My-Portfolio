import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center items-center gap-12 text-white font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              className="hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          </li>

          <li>
            <a
              href="#resume"
              className="hover:text-gray-300 transition duration-300"
            >
              Resume
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}