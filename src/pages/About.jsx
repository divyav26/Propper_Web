import React from 'react'
import video from '../img/image-video.jpg'
import Carousel from './Carousel'
import Layout from '../components/Layout'

const About = () => {
  const list = [
    'Quite and peaceful location near the nature',
    'Shopping and fitness center right inside the complex',
    'Lot of parking places, even for your visitors',
    'Many play areas for your kids',
  ]
  return (
    <Layout>
      <div className='about'>
            <div className='w-full bg-gray-200 p-4'>
              <div className='text-2xl font-bold my-10'>
                <h1 className=''>About the Project.</h1>
              </div>

              <div className='lg:flex justify-between w-full'>
                <div className='about-content lg:w-[50%]'>
                  <h3 className='font-semibold pb-5'>Place where you find yourself</h3>
                  <p className='text-xs text-gray-400 lg:w-[95%]'>Nam in sodales massa. Donec at ullamcorper diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus et ornare leo, a commodo tellus. Suspendisse potenti. Ut posuere viverra lectus non scelerisque.</p>
                  <div className='mt-4 gap-2'>
                  {
                    list.map((item,id)=>{
                      return(
                        <>
                        <ul className='text-sm  my-2'>
                          <li key={id} className='flex items-center gap-2'>
                            <i className='bx bxs-check-circle'></i>
                            {item}</li>
                        </ul>
                        </>
                      )
                    })
                  }
                  </div>
                </div>

                <div className='about-video lg:w-[50%]'>
                  <p className='text-sm font-semibold mb-6'>Video presentation</p>
                  <img src={video} alt='video' className='w-[500px] h-[200px]' />
                  <p className='text-xs text-gray-400 mt-2'>Let’s check the benefits of this project from the architect</p>
                </div>

              </div>

            </div>
            
            <div className='lg:flex lg:justify-around lg:items-center lg:w-full lg:h-[30vh]'>
              <div className='flex items-center mt-10'>
                <div className='icons'>
                <i className='bx bxs-check-circle text-6xl'></i>
                </div>
                <div className='text'>
                <p className='text-[9px] font-bold text-gray-400'>1. STAGE</p>
                <h1 className='text-xl font-semibold'>Planning</h1>
                <p className='text-xs'>Completed</p>
                </div>
              </div>

              <div className='flex items-center mt-10'>
                <div className='icons'>
                <i className='bx bxs-check-circle text-6xl'></i>
                </div>
                <div className='text'>
                <p className='text-[9px] font-bold text-gray-400'>2. STAGE</p>
                <h1 className='text-xl font-semibold'>Building</h1>
                <p className='text-xs'>Completed</p>
                </div>
              </div>

              <div className='flex items-center mt-10'>
                <div className='icons'>
                <i className='bx bxs-hourglass text-6xl text-gray-300'></i>
                </div>
                <div className='text'>
                <p className='text-[9px] font-bold text-gray-400'>3. STAGE</p>
                <h1 className='text-xl font-semibold'>Finishing works</h1>
                <p className='text-xs'>In progress</p>
                </div>
              </div>

              <div className='flex items-center mt-10'>
                <div className='icons'>
                <i className='bx bx-x-circle text-gray-300 text-6xl'></i>
                </div>
                <div className='text text-gray-300'>
                <p className='text-[9px] font-bold text-gray-400'>4. STAGE</p>
                <h1 className='text-xl font-semibold'>Planning</h1>
                <p className='text-xs'>Not completed</p>
                </div>
              </div>
            </div>

            <div className='lg:Design p-4 w-full h-[80vh]'>
                <div className='w-full lg:flex justify-between items-center'>
                  <div className='relative border-solid w-[60%] h-[40vh]'>
                    <div className='z-10'>
                      <p className='border-solid border-[10px] lg:w-[250px] lg:h-[120px] border-gray-200 p-2'>Architecture & Design</p>
                    </div>
                    <div className='lg:absolute lg:top-[20px] lg:left-10 lg:z-10'>
                      <Carousel />
                    </div>
                  </div>
                  <div className='lg:w-[40%] mt-14 h-[10vh]'>
                    <h4 className='text-sm mb-1'>High quality materials</h4>
                    <p className='text-xs text-gray-400'>Proin orci nisl, posuere viverra erat ut, pellentesque interdum urna. Curabitur eu risus convallis, auctor augue id, pharetra neque. Morbi pretium neque ac varius imperdiet. Aliquam sed sapien eget massa hendrerit aliquet. Integer auctor vel ligula eget faucibus</p>
                    <h4 className='text-sm my-2'>Soundproof rooms</h4>
                    <p className='text-xs text-gray-400'>Donec tincidunt fermentum purus, eu pharetra arcu scelerisque a. Maecenas felis eros, volutpat ac justo non, imperdiet porttitor lorem. Nulla suscipit mi a arcu sollicitudin, sit amet</p>
                  </div>
                </div>
            </div>

            <div className='lg:Design p-4 w-full h-[80vh]'>
                <div className='w-full lg:flex justify-between items-center'>
                  
                  <div className='lg:w-[40%] mt-14'>
                    <h4 className='text-sm mb-1'>Feel your new home</h4>
                    <p className='text-xs text-gray-400'>Proin orci nisl, posuere viverra erat ut, pellentesque interdum urna. Curabitur eu risus convallis, auctor augue id, pharetra neque. Morbi pretium neque ac varius imperdiet. Aliquam sed sapien eget massa hendrerit aliquet. Integer auctor vel ligula eget faucibus</p>
                    
                  </div>
                  <div className='border-solid w-[60%] relative'>
                    <div className='z-10 float-end my-3'>
                    <p className='w-[200px] border-solid border-[10px] lg:w-[270px] lg:h-[120px] border-gray-200 p-2'>Warm & Cozy Interior</p>
                    </div>
                    <div className='lg:absolute lg:top-[20px] lg:left-10 lg:z-10'>
                    <Carousel />
                    </div>
                  </div>
                </div>
            </div>
      </div>
    </Layout>
  )
}

export default About
