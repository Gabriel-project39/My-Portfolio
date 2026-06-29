import { FaDownload, FaEye } from "react-icons/fa";
import Navbar from "./Navbar";

function Resume() {
  return (
 <>
      <Navbar />

    <div className="min-h-screen bg-black text-white px-6">

      {/* Top button area */}
      <div className="pt-40 flex justify-center gap-6">

        {/* VIEW PDF */}
        <a
          href="/Gabriel-Kimanthi-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          <FaEye />
          View CV
        </a>

        {/* DOWNLOAD PDF */}
        <a
          href="/Gabriel-Kimanthi-CV.pdf"
          download
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-yellow-900/50 hover:bg-yellow-800/60 transition"
        >
          <FaDownload />
          Download CV
        </a>

      </div>

      {/* Main Text */}
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-6xl md:text-8xl font-bold text-center leading-tight">
          Let&apos;s work
          <br />
          together.
          <br />
          Get in touch.
        </h1>
      </div>

    </div>

{/* Footer */}
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

export default Resume;