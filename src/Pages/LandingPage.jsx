import CategoryCarousel from '@/AllComponents/CategoryCarousel';
import ImageSlider from '@/AllComponents/ImageSlider';
import NewArrivalProduct from '@/AllComponents/NewArrivalProduct';
import OurProducts from '@/AllComponents/OurProducts';
import HeaderAdjustment from '@/common/HeaderAdjustment';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
 

  const navigate = useNavigate()

  return (
    <div className=' w-full'>
      <HeaderAdjustment />
      <ImageSlider/>

      {/* category carousel */}
      <CategoryCarousel/>

      {/* our products */}
      <OurProducts />

      {/* new arrival */}
      <NewArrivalProduct/>
      
    </div>
  );
};

export default LandingPage;
