import { useState } from 'react'

import Beams from "./Beams";
import './Beams.css'
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* MAIN BACKGROUND WRAPPER */}
      <div className="w-full h-screen bg-black relative overflow-hidden">

        {/* BACKGROUND (BEAMS) */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* NAVBAR ON TOP */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* HOME TEXT ON TOP OF BEAMS */}
        <section
          id="home"
          className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">
            Gabriel Kimanthi
          </h1>

          <h2 className="text-2xl text-gray-300 mb-4">
            Frontend Developer
          </h2>

          <p className="text-center max-w-xl text-gray-400">
            I build responsive and modern web applications
            using React, JavaScript and Tailwind CSS.
          </p>
        </section>

      </div>

      {/* OTHER SECTIONS */}
      <section id="about"></section>
      <section id="projects"></section>
    </>
  )
}

export default App
