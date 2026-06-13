export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center items-center gap-12 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#profile" className="hover:text-gray-300 transition duration-300">
              Profile
            </a>
          </li>

          <li>
            <a href="#resume" className="hover:text-gray-300 transition duration-300 cursor;pointer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}