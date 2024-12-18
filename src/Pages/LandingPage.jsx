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

      {/* our products */}
      <OurProducts />

      {/* new arrival */}
      <NewArrivalProduct/>
      
    </div>
  );
};

export default LandingPage;
