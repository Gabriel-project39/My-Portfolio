function ProjectDetails() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">


  <div className="max-w-4xl w-full">

    {/* Project Name */}
    <h1 className="text-5xl font-bold mb-8 text-center">
      Decode Business Solutions
    </h1>

    {/* Project Description */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Project Overview
      </h2>

      <p className="text-gray-300 leading-8">
        Decode Business Solutions Website is a modern corporate branding website designed to showcase the company's expertise in brand acceleration, graphic design, printing services, promotional products, and visual identity development. The website serves as a digital platform where potential clients can explore Decode's services, products, and branding solutions while easily getting in touch for consultations and quotations.
      </p>
    </div>

    {/* Motivation */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Why I Built It
      </h2>

      <p className="text-gray-300 leading-8">
        I built the Decode Business Solutions website to establish a strong, professional online presence that clearly communicates the company’s services in branding, graphic design, printing, and promotional products.
      </p>
    </div>

    {/* Challenges */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Challenges Faced
      </h2>

      <ul className="list-disc list-inside text-gray-300 space-y-3">
        <li>Designing a simple and user-friendly interface.</li>
        <li>Making the application responsive on mobile devices.</li>
      </ul>
    </div>

    {/* Technologies */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Technologies Used
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <span className="px-4 py-2 bg-white/10 rounded-full">
          HTML
        </span>

        <span className="px-4 py-2 bg-white/10 rounded-full">
          Tailwind CSS
        </span>

        <span className="px-4 py-2 bg-white/10 rounded-full">
          JavaScript
        </span>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mt-16">

      <a
        href="https://decodebusiness.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-white text-black rounded-full font-semibold"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/Gabriel-project39/Decode-solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 border border-white rounded-full"
      >
        View on GitHub
      </a>

    </div>

  </div>
</div>
  );
}

export default ProjectDetails;