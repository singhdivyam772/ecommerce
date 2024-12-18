import ImageSlider from '@/AllComponents/ImageSlider';
import { NavigationMenuDemo } from '@/AllComponents/Navbar';
import NewArrivalProduct from '@/AllComponents/NewArrivalProduct';
import OurProducts from '@/AllComponents/OurProducts';
import HeaderAdjustment from '@/common/HeaderAdjustment';
import { AppleCardsCarouselDemo } from '@/test';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
 

  const navigate = useNavigate()

  return (
    <div className=' w-full'>
      <HeaderAdjustment />
      <ImageSlider/>

      <AppleCardsCarouselDemo />

      

      {/* Render multiple cards */}
      <div className=' w-full mx-auto flex flex-col'>
        <p className="max-w-7xl pl-4 text-xl md:text-5xl font-semibold text-pink-500 dark:text-neutral-200 font-sans"
        >
          Our Products
        </p>

        <div  className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4 cursor-pointer">
          <OurProducts />
        </div>
      </div>

      {/* new arrival */}
      <div className=' w-full mx-auto flex flex-col'>
        <p className="max-w-7xl pl-4 py-2 text-xl md:text-5xl font-semibold text-pink-500 dark:text-neutral-200 font-sans"
        >
          New Arrivals
        </p>

          <NewArrivalProduct/>
        
      </div>
      
    </div>
  );
};

export default LandingPage;
