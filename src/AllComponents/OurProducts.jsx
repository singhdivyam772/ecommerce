import { productCards } from '@/data'
import React from 'react'

const OurProducts = () => {
  return (
    <>
      {
        productCards.map((data) => (
          <div
            key={data.id}
            className="w-full h-[320px] shadow-xl shadow-pink-100 relative overflow-hidden group cursor-pointer rounded-md">
             <div className=' w-full h-full absolute bg-black/50 '>
                </div>   
           
            {/* Image */}
            <img
              src={data.src}
              alt="animated_card"
              className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500"
            />

            {/* Text */}
            <div
              className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
              <h1 className="text-[1.5rem] px-1 font-bold text-white text-center capitalize">
                {data.name}
              </h1>
              <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button
                className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
                View Details
              </button>
            </div>

            {/* Bottom Shadow */}
            <div
              className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-700 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
            </div>
          </div>
        ))
      }
    </>
  )
}

export default OurProducts
