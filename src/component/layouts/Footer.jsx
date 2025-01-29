import React from 'react'
import footerLogo from '../../assets/icon/Frame 1000003241.png'
import { Link } from 'react-scroll'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#F5FCFF] px-10 py-17 mx-auto  '>
      <div className=' flex flex-col lg:flex-row justify-center text-center lg:justify-between gap-6 items-center mb-11 '>
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div className='lg:flex-row lg:space-x-12  flex flex-col gap-2 text-sm '>
        <div className=''>
        <Link to='home' className='' >Home</Link>
        </div>
        <div>
          <Link to='portfolio' className='' >Portfolio</Link>
        </div>
        <div>
          <Link to='about' className='' >About me</Link>
        </div>
        <div>
          <Link to='contact' className='' >Contact</Link>
        </div>
        <div>
          <Link to='testimonial' className='' >Testimonial</Link>
        </div>
        <div>
          <Link to='portfolio' className='' >Portfolio</Link>
        </div>
        </div>
        <div className='lg:flex lg:space-x-4 flex flex-row gap-2'>
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
      </div>
      </div>
      <hr />
     <div className='flex flex-col lg:flex-row gap-6 justify-between h-20 items-center '>
     <div className='text-sm mt-4'>Made with 💖 by Airdokan</div>
      <div className='flex flex-row text-center lg:flex lg:space-x-4 text-sm'>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Cookie Policy</p>
      </div>
     </div>
    </div>
  )
}

export default Footer
