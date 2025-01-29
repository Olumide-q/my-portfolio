import React from 'react'
import SkillsCardBox from '../reusable/SkillsCardBox'


const SkillsCard = () => {
  return (
    <div className='bg-white px-10 py-27'>
        <div className=' w-full flex flex-col gap-3 my-20 '>
            <h6 className='font-semibold text-sm'>My Skills</h6>
            <h1 className='font-semibold text-3xl'>My Expertise</h1>
            <div></div>
        </div>
    <SkillsCardBox/>
    </div>
  )
}

export default SkillsCard
