import { NavigationMenuDemo } from '@/AllComponents/Navbar'
import { AppleCardsCarouselDemo, BackgroundBeamsDemo, ThreeDCardDemo } from '@/test'
import React from 'react'

const LandingPage = () => {
  return (
    <div>       
        <BackgroundBeamsDemo/>
        {/* <HeroParallaxDemo/> */}
        <div className=' flex md:flex-row flex-col w-full h-full md:gap-2 container'>

        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        </div>
        <AppleCardsCarouselDemo/>
    </div>
  )
}

export default LandingPage