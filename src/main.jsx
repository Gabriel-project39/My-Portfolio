import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Resume from "./Resume";
import Profile from "./Profile.jsx";
import ProjectDetails from './ProjectDetails.jsx'
import VelocityMotors from './VelocityMotors.jsx'
import BrewHaven from './BrewHaven.jsx'
import ElixirBusiness from './ElixirBusiness.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<App />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/resume" element={<Resume />} />

        {/* Decode Solution */}
        <Route path="/project" element={<ProjectDetails />} />

        {/* Velocity Motors */}
        <Route
          path="/velocity-motors"
          element={<VelocityMotors />}
        />

        {/* Brew Haven Coffee */}
        <Route
          path="/brew-haven"
          element={<BrewHaven />}
        />

        {/* Elixir Business Solutions */}
        <Route
          path="/elixir-business"
          element={<ElixirBusiness />}
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)