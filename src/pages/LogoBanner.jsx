import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../img/logo-1.png';
import logo2 from '../img/logo-2.png';
import logo3 from '../img/logo-3.png';
import logo4 from '../img/logo-4.png';
import logo5 from '../img/logo-5.png';
import logo6 from '../img/logo-6.png';
import logo7 from '../img/logo-7.png';
import logo8 from '../img/logo-8.png';
import Layout from '../components/Layout';


const LogoBanner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

    const logo= [
        logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8
    ]
  return (
    <div>
      <>
      <hr className='border-dashed border-[1px] border-gray-300'/>
      <div className='p-[2rem] h-[150px] mt-5 w-full overflow-hidden relative'>
        <div className='mx-4'>
        <Slider {...settings}>
            {
                logo.map((item)=>{
                    return (
                        <div className=''>
                            <img src={item} alt='img' className='h-10 w-20' />
                        </div>
                    )
                })
            }
            </Slider>
        </div>
      </div>
      </>
    </div>
  )
}

export default LogoBanner
