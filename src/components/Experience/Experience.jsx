import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
return (
<section
   id="experience"
   className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
 >
{/* Section Title */}
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white">
EXPERIENCE
</h2>

    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

    <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my work experience and the roles I have taken
      in various organizations
    </p>
  </div>

  {/* Experience Timeline */}
  <div className="relative">
    {/* Vertical Timeline Line */}
    <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white/70 h-full"></div>

    {/* Experience Entries */}
    {experiences.map((experience, index) => (
      <div
        key={experience.id}
        className={`relative flex flex-col sm:flex-row items-center mb-16 ${
          index % 2 === 0
            ? "sm:justify-end"
            : "sm:justify-start"
        }`}
      >
        {/* Experience Card */}
        <div
          className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ml-8 sm:ml-0 transform transition-transform duration-300 hover:scale-[1.02] ${
            index % 2 === 0
              ? "sm:ml-44"
              : "sm:mr-44"
          }`}
        >
          {/* Company Logo and Details */}
          <div className="flex items-start gap-4">
            {experience.img && (
              <div className="w-16 h-16 shrink-0 bg-white rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={experience.img}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            <div className="flex flex-col min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>

              <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                {experience.company}
              </h4>

              <p className="text-sm text-purple-300 mt-2">
                {experience.date}
              </p>
            </div>
          </div>

          {/* Experience Description */}
          {experience.desc && (
            <p className="mt-4 text-gray-400 leading-relaxed">
              {experience.desc}
            </p>
          )}

          {/* Responsibilities */}
          {experience.responsibilities && (
            <ul className="mt-4 space-y-2 text-gray-400 leading-relaxed list-disc pl-5">
              {experience.responsibilities.map(
                (responsibility, responsibilityIndex) => (
                  <li key={responsibilityIndex}>
                    {responsibility}
                  </li>
                )
              )}
            </ul>
          )}

          {/* Skills */}
          {experience.skills?.length > 0 && (
            <div className="mt-5">
              <h5 className="font-medium text-white">
                Skills:
              </h5>

              <ul className="flex flex-wrap mt-3 gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-[#8245ec]/20 text-gray-200 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-purple-400/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

);
};

export default Experience;