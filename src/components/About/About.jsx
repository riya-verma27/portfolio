import React from 'react';
import TypingEffect from '../../TypingEffect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/ProfileImg.jpeg';
//import ReactTypingEffect from 'react-typing-effect'

const About = () => {
  return (
    <section id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/*Greetings */}
          <h1 className='text-3xl ms:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am  </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Riya Verma</h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white '>
              I am a
            </span>
            <TypingEffect
              texts={['Fullstack Developer', 'App Developer', 'UI/UX Designer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              delay={2000}
            />
            {/* About me paragraph */}
            <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed' >
              Software Developer with nearly 2 years of experience building responsive and scalable web applications using
              React.js, JavaScript, HTML, and CSS. Skilled in REST API integration, reusable component design, and
              performance tuning. Familiar with Node.js, Express.js, and MongoDB for backend development. Open to both
              frontend and full-stack roles.</p>
            {/* Resume Button */}
            <a href="https://drive.google.com/file/d/1TDMh3Fwgh0kW_9uU3arsfsquxdBoKJ4M/view?usp=sharing"
              target="_blank" rel="noopener noreferer"
              className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
              style={{
                background: 'linear-gradient{90deg,#8245ec, #a855f7}',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                backgroundColor: '#8245ec'
              }}>
              Download CV
            </a>
            {/* <ReactTypingEffect
              text={['Fullstack Developer', 'App Developer', 'UI/UX Designer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            /> */}
          </h3>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end '>
          <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-4 border-purple-700 rounded-full'
          tiltMaxAngleX={0} tiltMaxAngleY={0} perspective={1000}scale={1.05} transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Riya Verma" className='w-full h-full rounded-full object-cover
        drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'></img>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
