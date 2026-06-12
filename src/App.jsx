import { useState } from 'react'

import Beams from "./Beams";
import './Beams.css'
import Navbar from "./Navbar";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

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

      <section className="w-full bg-[#0F172A] py-32">
        
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-6xl md:text-8xl font-bold text-white text-center">
      Empowering brands worldwide with exceptional
      <span className="text-cyan-400"> Software</span> solutions.
    </h2>

    
 <div className="mt-32">
      <h3 className="text-center text-white text-4xl font-bold mb-12">
        Technologies I Use
      </h3>
</div>
      <div className="mt-40 backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-12">

  <div className="flex flex-wrap justify-center items-center gap-12">

    <FaHtml5 className="text-7xl text-orange-500 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <FaCss3Alt className="text-7xl text-blue-500 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <FaJs className="text-7xl text-yellow-400 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <FaReact className="text-7xl text-cyan-400 hover:scale-125 hover:rotate-180 transition-all duration-500 cursor-pointer" />

    <FaBootstrap className="text-7xl text-purple-500 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <SiTailwindcss className="text-7xl text-cyan-300 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <FaGithub className="text-7xl text-white hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <FaFigma className="text-7xl text-pink-500 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <SiNextdotjs className="text-7xl text-white hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

    <SiTypescript className="text-7xl text-blue-400 hover:scale-125 hover:-translate-y-3 transition-all duration-300 cursor-pointer" />

  </div>

</div>

    </div>


</section>

 <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-5xl font-bold text-center mb-6">
        My Projects
      </h1>

      <p className="text-center text-gray-400 mb-16">
        A collection of projects I have built and worked on.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Project Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
          <img
            src="decode.png"
            alt="Project"
            className="rounded-xl mb-4"
          />

          <h2 className="text-2xl font-semibold mb-2">
            Decode Solution
          </h2>

          <p className="text-gray-400 mb-4">
            Smart transport guide showing routes, fares and stages.
          </p>

         <a
  href="/project"
  className="px-4 py-2 bg-white text-black rounded-full inline-block"
>
  View Project
</a>
        </div>

      </div>
    </div>

      {/* OTHER SECTIONS */}
      <section id="about"></section>
      <section id="projects"></section>
    </>
  )
}

export default App
