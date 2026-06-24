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
      </>
  );
}

export default Resume;