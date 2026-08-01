import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavButton = ({ to, text }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <NavLink
      to={to}
      onMouseMove={handleMove}
      className={({ isActive }) =>
        `nav-item ${isActive ? "active-link" : ""}`
      }
    >
      {/* Liquid Blob */}
      <span
        className="blob"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
        }}
      ></span>

      {/* Shimmer */}
      <span className="shine"></span>

      {/* Dancing Letters */}
      <span className="letters">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </NavLink>
  );
};

function Navbar() {
  return (
    <nav className="navbar-wrapper">

      <div className="navbar-glass">

        <NavButton
          to="/"
          text="Home"
        />

        <NavButton
          to="/profile"
          text="Profile"
        />

        <NavButton
          to="/resume"
          text="Resume"
        />

      </div>

    </nav>
  );
}

export default Navbar;