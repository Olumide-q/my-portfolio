import React from 'react'

const Contact = () => {
  return (
    <div className='  flex flex-col justify-center items-center px-10 py-27 mx-auto'>
       <div className='w-[50%] flex flex-col text-center mb-12 gap-4'>
       <h6 className='font-semibold text-sm'>Get In Touch</h6>
        <h1 className='font-semibold text-2xl lg:text-3xl'>Contact me</h1>
        <p className='text-sm items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
       </div>
        <form className='flex flex-col w-[100%] lg:w-[50%] gap-6'>
            <div className='flex  gap-4 w-full'>
                <label className='flex flex-col w-full gap-1' htmlFor="firstname">First Name
                <input className='border border-black rounded-md  text-sm py-1 mt-1'  type="text" />
                </label>
                
                <label className='flex flex-col w-full gap-1' htmlFor="lastname">Last Name
                <input className='border border-black rounded-md  text-sm py-1 mt-1' type="text" />
                </label>
            </div>
            <div className='flex  gap-4 w-full'>
                <label className='flex flex-col w-full gap-1' htmlFor="email">Email
                <input className='border border-black rounded-md  text-sm py-1 mt-1' type="text" />
                </label>
                <label  className='flex flex-col w-full gap-1' htmlFor="phonenumber">Phone Number
                    <input className='border border-black rounded-md  text-sm py-1 mt-1' type="text" />
                </label>
            </div>
            <div>
                <label className='flex flex-col gap-2' htmlFor="message">Message
                <textarea className='border border-black rounded-md  h-[100px] w-full text-sm py-1 mt-1 px-3' placeholder='Type your message...' />
                </label>
            </div>
            <div className=''>
                <label className='flex flex-row gap-2 text-center' htmlFor="consent">
                <input type="checkbox" value = "consent" />
                I accept the terms
                </label>
            </div>
            <div className='flex flex-row justify-center gap-4'>
                <button className='w-full bg-[#5E3BEE]  text-center  py-3 rounded-md text-white'>
                    Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Contact
