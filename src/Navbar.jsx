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
            <a href="#about" className="hover:text-gray-300 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-gray-300 transition duration-300">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}