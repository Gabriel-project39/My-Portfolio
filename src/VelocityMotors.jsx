function VelocityMotors() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Project Name */}
        <h1 className="text-5xl font-bold mb-8 text-center">
         Fast and Furious Automatives
        </h1>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Project Overview
          </h2>

          <p className="text-gray-300 leading-8 text-center">
            Fast and Furious Automatives is a modern car dealership website that allows users
            to browse vehicle collections, explore specifications, and contact
            the dealership through an intuitive and responsive interface.
          </p>
        </div>

        {/* Motivation */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Why I Built It
          </h2>

          <p className="text-gray-300 leading-8 text-center">
            I wanted to create a professional automotive platform that
            demonstrates how businesses can showcase products online while
            delivering an engaging user experience.
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Challenges Faced
          </h2>

          <ul className="list-disc text-gray-300 space-y-3 max-w-2xl mx-auto">
            <li>Creating an attractive vehicle gallery.</li>
            <li>Organizing large amounts of car information.</li>
            <li>Building responsive layouts for all devices.</li>
            <li>Maintaining consistent design across pages.</li>
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
               CSS
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full">
              JavaScript
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-16 flex-wrap">
          <a
            href="https://fastcarsfurious.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Gabriel-project39/Fast-and-furious"
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

export default VelocityMotors;