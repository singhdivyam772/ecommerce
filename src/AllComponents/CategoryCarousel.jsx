import React from 'react'
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const CategoryCarousel = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    
      return (
        (<div className="w-full h-full md:py:12 pt-8">
          <h2
            className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-pink-500 font-sans">
           Our Variety of Wedding Cards
          </h2>
          <Carousel items={cards} />
        </div>)
      );
    }

export default CategoryCarousel

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Elegant Wedding Card",
    title: "You can do more with AI.",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1260.jpg",
    content: <DummyContent />,
  },
  {
    category: "Classic Scrolling Invitation",
    title: "Enhance your productivity.",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1187.jpg",
    content: <DummyContent />,
  },
  {
    category: "Modern Theme Wedding Card",
    title: "Launching the new Apple Vision Pro.",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1190.jpg",
    content: <DummyContent />,
  },

  {
    category: "Vintage Wedding Invitation",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1232.jpg",
    content: <DummyContent />,
  },
  {
    category:"Luxury Scroll Wedding Card",
    title: "Photography just got better.",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1100.jpg",
    content: <DummyContent />,
  },
  {
    category: "Floral Design Invitation Card",
    title: "Hiring for a Staff Software Engineer",
    src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S932.jpg",
    content: <DummyContent />,
  },
];
