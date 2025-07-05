import React from 'react';
import { SkillsInfo } from '../../constants';
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom bg-[linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)]"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8425ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-4 justify-between py-10">
        {SkillsInfo.map((item) => (
          <div
            key={item.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:[width:48%] lg:w-[45%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 text-center mb-5">
              {item.title}
            </h3>
            <Tilt
          tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}scale={1.05} transitionSpeed={1000}
            gyroscope={true}
          >
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full '>
              {item.skills.map((skill)=>(
                <div key={skill.name}
                className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center'>
                  <img src={skill.logo} alt={`${skill.name} logo`}
                  className='w-6 h-6 sm:w-8 sm:h-8'>
                  </img>
                   <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
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
