import React from 'react'
import TestimonialCardBox from '../reusable/TestimonialCardBox'
import { testimonial } from '../Db'

const TestimonialCard = () => {
  return (
    <div className='px-10 py-27 bg-[#F5FCFF]'>
      <div className=' pb-10 flex flex-col gap-6  my-15'>
        <h6 className='font-semibold text-sm'>Clients Feedback</h6>
        <h1 className='font-semibold text-3xl'>Customer testimonials</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-7'>
        {testimonial.map((testi)=>{
          return(
            <div key={testi.id}>
              <TestimonialCardBox mytestimonial={testi}/>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestimonialCard
