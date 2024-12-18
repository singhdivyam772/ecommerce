// App.jsx
import React from 'react';
import './index.css';
import { NavigationMenuDemo } from './AllComponents/Navbar';
import Footer from './AllComponents/Footer';
import LandingPage from './Pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import ProductsDetails from './Pages/ProductsDetails';
import Cart from './Pages/AddToCart';
import CheckoutPage from './Pages/CheckoutPage';


function App() {
  return (
    <div>
       <NavigationMenuDemo/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/productdetails" element={<ProductsDetails/>}/>
        <Route path="/addtocart" element={<Cart/>}/>
        <Route path="/checkoutpage" element={<CheckoutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
