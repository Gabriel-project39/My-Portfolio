import Navbar from "./Navbar";

function Profile() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <div className="min-h-screen bg-black/75 backdrop-blur-sm px-8 py-32">

        {/* Hero Section */}
        <div className="text-center mb-24">
          <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h1 className="text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Gabriel Kimanthi
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer passionate about creating modern,
            responsive and visually stunning web experiences using
            React, JavaScript and Tailwind CSS.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* About Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 hover:scale-105 transition duration-500">
            <h2 className="text-3xl font-bold mb-6">
              Who I Am
            </h2>

            <p className="text-gray-300 leading-8">
              I'm a frontend developer who enjoys turning ideas into
              beautiful digital experiences. My focus is building
              responsive, user-friendly and high-performance websites
              that deliver great user experiences across all devices.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 hover:scale-105 transition duration-500">
            <h2 className="text-3xl font-bold mb-6">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-3 rounded-full bg-purple-500/20 border border-purple-400/30">
                React
              </span>

              <span className="px-5 py-3 rounded-full bg-blue-500/20 border border-blue-400/30">
                JavaScript
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                Tailwind CSS
              </span>

              <span className="px-5 py-3 rounded-full bg-pink-500/20 border border-pink-400/30">
                HTML5
              </span>

              <span className="px-5 py-3 rounded-full bg-green-500/20 border border-green-400/30">
                CSS3
              </span>

              <span className="px-5 py-3 rounded-full bg-orange-500/20 border border-orange-400/30">
                Responsive Design
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">10+</h3>
            <p className="text-gray-300">Projects Built</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">3+</h3>
            <p className="text-gray-300">Major Technologies</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">100%</h3>
            <p className="text-gray-300">Passion</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">∞</h3>
            <p className="text-gray-300">Learning</p>
          </div>

        </div>
      </div>


<footer className="bg-black text-white py-10 px-6 border-t border-gray-800">

  {/* Copyright */}
  <p className="text-center text-gray-400 text-sm mb-8">
    © Gabriel Kimanthi 2026
  </p>

  {/* Footer Links */}
  <div className="max-w-4xl mx-auto flex justify-center gap-16 text-sm md:text-base">

    <a
      href="https://www.linkedin.com/in/gabriel-kimanthi-8777ab344"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-300 transition duration-300"
    >
      LinkedIn
    </a>

    <a
      href="mailto:gabrielkimanthi39r@email.com"
      className="hover:text-yellow-300 transition duration-300"
    >
      Mail
    </a>

  </div>

</footer>


    </>
  );
}

export default Profile;