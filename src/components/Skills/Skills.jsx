
// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  // Add these categories to SkillsInfo in constants.js
  // if they do not already exist.
  return (
    <section
      id="skills"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[8vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full" />

        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-3xl mx-auto">
          A collection of my technical skills and expertise developed
          through projects and practical experience.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="w-full min-h-[190px] bg-gray-900/90 backdrop-blur-md p-6 sm:p-8 rounded-[22px] border border-gray-200 shadow-[0_0_20px_1px_rgba(130,69,236,0.22)] transition-all duration-300 hover:shadow-[0_0_28px_2px_rgba(130,69,236,0.35)]"
          >
            {/* Category Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-5 text-center">
              {category.title}
            </h3>

            {/* Skill Badges */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="flex flex-wrap gap-3 justify-start">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-3 min-h-[66px] min-w-[140px] max-w-full rounded-full border-2 border-gray-700 px-4 py-3 text-center transition-all duration-300 hover:border-[#8245ec] hover:bg-[#8245ec]/10"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
                    />

                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
