import React from 'react'
import {skills} from '../constants'
import CTA from '../components/CTA'


const About = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
          Hello! I'm <span className='blue-gradient_text font-semibold drop-shadow'>Ayush</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Hi, I'm a passionate developer who loves building modern and interactive web experiences. 
I enjoy turning ideas into real-world applications using technologies like React, JavaScript, and modern UI tools.</p>
        </div>
        
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
        </div>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl}
               alt={skill.name} 
               className='w-16 h-16 object-contain' 
               />
               </div>
              
            </div>
          ))}<CTA/>
        </div>
    </section>
    
  )
}

export default About