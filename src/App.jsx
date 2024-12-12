// App.jsx
import React from 'react';
import { AppleCardsCarouselDemo, BackgroundBeamsDemo, HeroParallaxDemo, ThreeDCardDemo } from './test';
import './index.css';
import { NavigationMenuDemo } from './AllComponents/Navbar';
import Footer from './AllComponents/Footer';
import LandingPage from './Pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import ProductsDetails from './Pages/ProductsDetails';

function App() {
  return (
    <div>
       <NavigationMenuDemo className=" fixed top-0" />
      <Routes>
        
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/productdetails" element={<ProductsDetails/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
