import React from 'react'
import { projects } from '../../constants'
const Work = () => {
  return (
    <section id='work' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white '>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold '>A curated collection of projects that demonstrate my technical skills and hands-on experience across a range of technologies.</p>
        {/* Project Grid */}
        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {projects.map((item)=>(
            <div key= {item.id} onClick={()=> window.open(item.github,'_blank')} className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover: shadow-purple-500/50
            hover:-translate-y-2 transition-transform duration-300'>
              <div className='p-4 '>
                <img src={item.image} alt={item.title} className='w-full h-48 object-cover rounded-xl'/>
              </div>
              <div className='p-6 '>
                <h3 className='text-2xl font-bold text-white mb-2 '>
                  {item.title}
                </h3>
                <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                  {item.description}
                </p>
                <div className='mb-4'>
                  {item.tags.map((tag,index)=>(
                    <span key ={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 px-2 py-1 mr-2 mb-2'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
