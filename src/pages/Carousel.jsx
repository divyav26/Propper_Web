import { RxDotFilled } from "react-icons/rx";
import c1 from '../img/gallery-big-01.jpg'
import c2 from '../img/gallery-big-02.jpg'
import c3 from '../img/gallery-big-03.jpg'
import React, { useState } from 'react'
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = () => {
    const sliders =[
        c1,c2,c3,
    ]
    let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(sliders.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === sliders.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className='w-[350px] lg:w-[400px] lg:h-[300px] overflow-hidden relative mt-10'>
        <div
                className={`flex transition ease-out duration-40`}
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
    
      {
        sliders.map((item)=>{
            return(      
                 <img src={item} alt='' className="bg-cover" />
            )
        })
      }
     
    </div>
    <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-2xl hidden">
                <button onClick={previousSlide}>
                  <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                  <BsFillArrowRightCircleFill />
                </button>
              </div>

              <div className="py-2 flex justify-start gap-3 w-full">
                {sliders.map((s, i) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrent(i);
                      }}
                      key={"circle" + i}
                      className={`rounded-full w-2 h-2 cursor-pointer  ${
                        i == current ? "bg-gray-400" : "bg-black"
                      }`}
                    ></div>
            );
          })}
        </div>
        
    
      
    </div>
   
    
  )
}

export default Carousel
