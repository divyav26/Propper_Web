import React from 'react'
import footer from '../img/footer-bg.jpg'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[100vh] relative'>
        <div>
            <img src={footer} alt='' className='absolute h-full w-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-70'/>
        </div>
        <div className='absolute p-10 lg:w-full lg:h-full'>
            
            <h1 className='text-white font-bold text-2xl hover:animate-fade-down'>Propper.</h1>
            

            <div className='lg:flex lg:justify-between lg:items-center mt-5'>
              <div className='text-gray-400 '>
                <p className='text-[10px]'>Proin orci nisl, posuere viverra erat ut, pellentesque interdum<br/> urna. Curabitur eu risus convallis, auctor augue id, pharetra<br/> neque.</p>
              </div>

              <div className='text-xs text-white mt-3'>
                <p>Shop No.B/5, Nagee Palace,<br/> Sai Baba Nagar Road, Navghar Rd, <br/>Bhayandar East, Maharashtra 401105</p>
              </div>

              </div>

                <hr  className='border-dashed border-[1px] border-gray-500 mt-10'/>
                <p className='text-[10px] text-gray-400 mt-4'>(C) 2016 All Rights Reserved</p>

                <div className='mt-[8rem]'>
                  <h1 className=' text-white text-xl font-bold mb-3'>Bonus numbers</h1>
                </div>

                <div className='text-white lg:flex lg:justify-between lg:items-center'>
                  <div className='lg:flex lg:justify-between lg:items-center lg:gap-10 lg:mt-1 text-center'>
                      <div className='mb-5'>
                          <h1 className='text-2xl font-semibold'>54</h1>
                          <p className='text-gray-400 text-xs font-bold'>Projects done</p>
                      </div>

                      <div className='mb-5'>
                        <h1 className='text-2xl font-semibold'>21</h1>
                        <p className='text-gray-400 text-xs font-bold'>Employees</p>
                      </div>

                      <div className='mb-5'>
                        <h1 className='text-2xl font-semibold'>48</h1>
                        <p className='text-gray-400 text-xs font-bold'>Satisfied Clients</p>
                      </div>

                      <div className='mb-5'>
                        <h1 className='text-2xl font-semibold'>17</h1>
                        <p className='text-gray-400 text-xs font-bold'>Prices Won</p>
                      </div>  
                  </div>
                  <div className='lg:border-[10px] border-solid border-gray-600 p-3 float-end border-[10px]'>
                        <FaArrowUp className='text-gray-400 text-lg' />
                  </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
