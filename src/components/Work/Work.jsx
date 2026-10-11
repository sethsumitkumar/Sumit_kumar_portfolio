
import React, { useEffect, useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="relative px-[6vw] py-24 pb-24 font-sans md:px-[7vw] lg:px-[8vw]"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-purple-500" />

        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-gray-400 sm:text-lg">
          A showcase of the projects I have worked on, highlighting my
          skills and experience in web development, data analytics, and
          AI integration.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => handleOpenModal(project)}
            aria-label={`View details for ${project.title}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/90 text-left shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {/* Project Image */}
            <div className="w-full overflow-hidden p-4">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-48 w-full rounded-xl bg-white object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-1 flex-col p-6 pt-2">
              <h3 className="mb-3 text-xl font-bold leading-snug text-white">
                {project.title}
              </h3>

              <p className="mb-5 line-clamp-4 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-500/20 bg-[#251f38] px-3 py-1.5 text-xs font-medium text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-6 text-sm font-semibold text-purple-300 transition group-hover:text-purple-200">
                View Project Details ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          onClick={handleCloseModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-auto max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#100d25] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#100d25]/95 px-5 py-4 backdrop-blur sm:px-7">
              <h3
                id="project-modal-title"
                className="text-lg font-bold text-white sm:text-2xl"
              >
                {selectedProject.title}
              </h3>

              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-2xl text-white transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-300"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7">
              <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-xl bg-white p-2 sm:min-h-64">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="max-h-[55vh] w-full rounded-lg object-contain"
                />
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base">
                {selectedProject.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-500/20 bg-[#251f38] px-3 py-1.5 text-xs font-medium text-purple-300 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {selectedProject.github &&
                  selectedProject.github !==
                    "ADD_YOUR_HOSPITAL_PROJECT_GITHUB_URL" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="flex-1 rounded-xl border border-white/10 bg-gray-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-purple-500/50 hover:bg-gray-700 sm:text-base"
                    >
                      View Code on GitHub ↗
                    </a>
                  )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-500 sm:text-base"
                  >
                    View Live Project ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
