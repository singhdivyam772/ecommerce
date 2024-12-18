// test.jsx
import React from 'react';
import { MouseEnterProvider } from './components/ui/3d-card';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';
import { motion } from "framer-motion";


export function DirectionAwareHoverDemo({imageUrl}) {

  const navigate = useNavigate()
  return (
    <div 
      onClick={() => navigate("/productdetails")}
      className="h-[20rem] flex-col relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        
       <Button  
            translateZ={20}
            as="button"
            className=" w-full px-4  rounded-xl border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all text-pink-500 text-xs font-bold"
          >
            Add To Cart
        </Button>
      </DirectionAwareHover>
    </div>
  );
}





// import React from "react";
import { HeroParallax } from "../src/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];


import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-4">
      <h2
        className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-semibold text-pink-500 dark:text-neutral-200 font-sans">
          Our Variety of Wedding Cards      
        </h2>
      <Carousel items={cards} />
    </div>)
  );
}



const data = [
  {
    category: "Wedding Card",
    title: "Celebrate Love with Elegant Wedding Cards.",
    src: "https://img.freepik.com/free-vector/gradient-golden-floral-wedding-invitation_52683-60511.jpg?ga=GA1.1.665618561.1734502599&semt=ais_hybrid",
  },
  {
    category: "Scrolling Invitation",
    title: "Unroll Elegance with Scrolling Invitations.",
    src: "https://img.freepik.com/premium-photo/close-up-hanging-green-scroll-with-floral-decorations-elegant-displays-generative-ai_166669-21574.jpg?ga=GA1.1.665618561.1734502599&semt=ais_hybrid",
  },
  {
    category: "Theme Cards",
    title: "Bring Your Vision to Life with Stunning Theme Cards.",
    src: "https://img.freepik.com/premium-vector/p4_973842-29.jpg?ga=GA1.1.665618561.1734502599&semt=ais_hybrid",
  },

  {
    category: "Digital Invitation",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://img.freepik.com/premium-vector/indian-wedding-card-invitation-template_943282-271.jpg?ga=GA1.1.665618561.1734502599&semt=ais_hybrid",
   
  },
  
];







