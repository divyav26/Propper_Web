import React, { useState } from 'react'
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import c1 from '../img/gallery-big-01.jpg'
import c2 from '../img/gallery-big-02.jpg'
import c3 from '../img/gallery-big-03.jpg'
import Layout from '../components/Layout';
import LogoBanner from './LogoBanner';

const Gallary = () => {
  const sliders =[
    c1,
    c2,
    c3,
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
    <Layout>
    <div className='p-5 w-full lg:h-[100vh]'>
          <div className="overflow-hidden relative lg:h-[80vh] w-full my-10">
              <div
                className={`flex transition ease-out duration-40`}
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {sliders.map((s) => {
                  return <img src={s} />;
                })}
              </div>

              <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-2xl">
                <button onClick={previousSlide}>
                  <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                  <BsFillArrowRightCircleFill />
                </button>
              </div>

              <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {sliders.map((s, i) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrent(i);
                      }}
                      key={"circle" + i}
                      className={`rounded-full w-4 h-4 cursor-pointer  ${
                        i == current ? "bg-white" : "bg-gray-500"
                      }`}
                    ></div>
            );
          })}
        </div>
          </div>

      </div>
      <LogoBanner />
    </Layout>
  )
}

export default Gallary
