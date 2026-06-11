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
          <h1 className="text-8xl font-extrabold mb-10">
            Gabriel Kimanthi
          </h1>

         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
  <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-md hover:bg-white/20 transition">
    Frontend Developer
  </button>

  <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-md hover:bg-white/20 transition">
    React Developer
  </button>

  <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-md hover:bg-white/20 transition">
    UI Designer
  </button>

  <button className=" ml-10 sm:ml-0  px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-md hover:bg-white/20 transition">
    Software Developer
  </button>
</div>

<p className="text-gray-400 text-3xl mt-9 max-w-2xl">
  Frontend Developer crafting responsive, user-focused interfaces.
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
