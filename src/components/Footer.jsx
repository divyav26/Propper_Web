import React from 'react'
import footer from '../img/footer-bg.jpg'
import { FaArrowUp } from "react-icons/fa";
import {BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full h-[100vh] relative'>
        <div>
            <img src={footer} alt='' className='absolute h-full w-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-70'/>
        </div>
        <div className='absolute p-5 lg:w-full lg:h-full'>
            
            <h1 className='text-white font-bold text-2xl hover:animate-fade-down'>Propper.</h1>
            

            <div className='lg:flex lg:justify-between lg:items-center mt-5'>
              <div className='text-gray-400 '>
                <p className='text-[10px]'>Proin orci nisl, posuere viverra erat ut, pellentesque interdum<br/> urna. Curabitur eu risus convallis, auctor augue id, pharetra<br/> neque.</p>
              </div>

              <div className='text-xs text-white mt-3'>
                <p className='text-sm flex gap-2'><FaLocationDot className='mt-1' />Shop No.B/5, Nagee Palace,<br/> Sai Baba Nagar Road, Navghar Rd, <br/>Bhayandar East, Maharashtra 401105</p>
                <p className='mt-1 text-sm flex justify-center items-center gap-2 float-left'><BsFillTelephoneInboundFill /> +91 84540 50179</p>
              </div>

              </div>

                <hr  className='border-dashed border-[1px] border-gray-500 lg:mt-6 mt-8'/>
                <p className='text-[10px] text-gray-400 mt-4'>(C) 2016 All Rights Reserved</p>

                <div className='lg:w-[40%] w-[100%] lg:mt-[6rem] mt-[2rem] text-white'>
                  <div className='lg:flex lg:justify-between items-center text-center'>
                    <div className='flex flex-col lg:text-xs'>
                      <p className='text-white font-semibold py-1 lg:text-sm text-2xl'>Links</p>
                      <Link to='/' className='p-1'>Home</Link>
                      <Link to='/about' className='p-1'>About</Link>
                      <Link to='/' className='p-1'>Pricing</Link>
                      <Link to='/contact' className='p-1'>Contact</Link>
                    </div>

                    <div className='flex flex-col text-xs'>
                      <p className='text-white lg:text-sm font-bold py-1 text-2xl'>Company</p>
                      <Link to='/' className='p-1'>About Us</Link>
                      <Link to='/' className='p-1'>News</Link>
                      <Link to='/' className='p-1'>Careers</Link>
                      <Link to='/' className='p-1'>Media Kit</Link>
                    </div>

                    <div className='flex flex-col text-xs'>
                      <p className='text-white font-semibold py-1 lg:text-sm text-2xl'>Social</p>
                      <Link to='/' className='p-1'>Twitter</Link>
                      <Link to='/' className='p-1'>LinkedIn</Link>
                      <Link to='/' className='p-1'>Facebook</Link>
                      <Link to='/' className='p-1'>GitHub</Link>
                    </div>

                  </div>

                </div>

                
        </div>
    </div>
  )
}

export default Footer
