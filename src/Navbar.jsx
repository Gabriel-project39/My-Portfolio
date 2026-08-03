import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative px-7 py-3 rounded-full overflow-hidden transition-all duration-500
        ${
          isActive
            ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.45)]"
            : "text-white hover:text-white hover:-translate-y-1 hover:scale-105"
        }`
      }
    >
      {/* Animated Gradient */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></span>

      {/* Shine */}
      <span className="absolute top-0 left-[-120%] w-[80px] h-full bg-white/40 skew-x-12 group-hover:animate-shine"></span>

      {/* Text */}
      <span className="relative z-20 flex">
        {children.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block group-hover:animate-dance"
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>

      {/* Glow */}
      <span className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 bg-white"></span>
    </NavLink>
  );
};

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div
        className="
        flex items-center gap-3
        p-2
        rounded-full
        border border-white/10
        bg-black/30
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(255,255,255,0.08)]
        "
      >
        <NavItem to="/">Home</NavItem>

        <NavItem to="/profile">Profile</NavItem>

        <NavItem to="/resume">Resume</NavItem>
      </div>

    </nav>
  );
}

export default Navbar;