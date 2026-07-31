import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-2
          px-3 py-3
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(255,255,255,0.08)]
        "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-white text-black font-semibold shadow-lg"
                : "text-white hover:bg-white/10 hover:scale-105"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-white text-black font-semibold shadow-lg"
                : "text-white hover:bg-white/10 hover:scale-105"
            }`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-white text-black font-semibold shadow-lg"
                : "text-white hover:bg-white/10 hover:scale-105"
            }`
          }
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;