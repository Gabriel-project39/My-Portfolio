function ElixirBusiness() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20 flex justify-center">
  <div className="max-w-4xl w-full">

    {/* Project Name */}
    <h1 className="text-5xl font-bold mb-8 text-center">
      Elixir Business Solutions
    </h1>

    {/* Project Description */}
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Project Overview
      </h2>

      <p className="text-gray-300 leading-8 text-center">
        Elixir Business Solutions is a corporate website designed to
        showcase business services, company achievements, and client
        solutions through a modern and professional digital presence.
      </p>
    </div>

    {/* Motivation */}
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Why I Built It
      </h2>

      <p className="text-gray-300 leading-8 text-center">
        The goal of this project was to create a professional business
        website that highlights services clearly while demonstrating
        modern frontend development practices.
      </p>
    </div>

    {/* Challenges */}
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Challenges Faced
      </h2>

      <ul className="text-center pl-6 text-gray-300 space-y-3 max-w-2xl mx-auto ">
        <li>Structuring large amounts of company information.</li>
        <li>Creating a professional and trustworthy design.</li>
        <li>Ensuring consistency across multiple sections.</li>
        <li>Designing reusable and scalable components.</li>
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
        href="https://elixier.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-white text-black rounded-full font-semibold"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/Gabriel-project39/Elixir"
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

export default ElixirBusiness;