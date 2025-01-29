import React from 'react'
import about from '../assets/images/About Me.png'

const About = () => {
  return (
    <div className='bg-white px-10 py-27 flex flex-col lg:flex-row  items-center gap-18 mx-auto'>
      <div className=''>
         <img src={about} alt="" />
      </div>
      <div className='flex flex-col gap-4 '>
      <div className='flex flex-col gap-2'>
      <h6 className='font-semibold text-sm'>About</h6>
      <h1 className='font-semibold text-3xl'>About Me</h1>
      </div>
        <div className='flex flex-col gap-4 '>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
        <p className='text-sm'>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
      </div>
    </div>
  )
}

export default About
