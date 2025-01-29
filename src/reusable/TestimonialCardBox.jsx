import React from 'react'
import { FaStar } from "react-icons/fa";

const TestimonialCardBox = ({mytestimonial}) => {
  return (
    <div className='border px-8 py-8 rounded-sm border-[#006B6A]'>
        <div className='flex flex-col gap-4'>
       <div className='flex flex-row'>
       {[...Array(mytestimonial.rating)].map((_, index) => (
                <FaStar className='text-teal-700 ' size={25} key={index}/>
            ))}
       </div>
           <div>
           <p>{mytestimonial.desc}</p>
           </div>
           <div className='flex flex-row gap-4'>
            <span><img className='w-[40px]' src={mytestimonial.image} alt="" /></span>
            <div>
                <h6 className='font-semibold text-sm'>{mytestimonial.name}</h6>
                <p className='text-sm'>{mytestimonial.group}</p>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default TestimonialCardBox
