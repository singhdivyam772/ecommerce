import { NavigationMenuDemo } from '@/AllComponents/Navbar';
import NewArrivalProduct from '@/AllComponents/NewArrivalProduct';
import HeaderAdjustment from '@/common/HeaderAdjustment';
import { AppleCardsCarouselDemo, DirectionAwareHoverDemo, ImagesSliderDemo } from '@/test';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const imageUrls = [
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1734503412/banner2_eaofhi.jpg",
    "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1214.jpg",
    "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S183.jpg",
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1734503412/banner2_eaofhi.jpg",
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1734503412/banner2_eaofhi.jpg",
    "https://img.freepik.com/premium-vector/blackground-thailand-invitation-vintage-cover_41810-27.jpg?ga=GA1.1.665618561.1734502599&semt=ais_hybrid",
    // Add more URLs as needed
  ];

  const navigate = useNavigate()

  return (
    <div>
      <HeaderAdjustment />
      <ImagesSliderDemo />

     
      <div className='flex md:flex-row flex-col w-full h-full '>
        {/* Other content */}
      </div>

      <AppleCardsCarouselDemo />

      {/* Render multiple cards */}
      <div className=' w-full mx-auto flex flex-col'>
        <p className="max-w-7xl pl-4 text-xl md:text-5xl font-semibold text-pink-500 dark:text-neutral-200 font-sans"
        >
          Our Products
        </p>

        <div  className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 cursor-pointer">
          {imageUrls.map((url, index) => (
            <DirectionAwareHoverDemo key={index} imageUrl={url} 
            />
          ))}
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
