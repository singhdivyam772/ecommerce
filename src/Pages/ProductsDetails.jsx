import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion"; 

import wc1 from "../assets/wc1.avif";
import wc2 from "../assets/wc2.avif";
import wc3 from "../assets/wc3.webp";
import wc4 from "../assets/wc4.webp";
import { Button } from "../components/ui/button";
import { IoShareSocialOutline } from "react-icons/io5";

import { HiMinusSm } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Copy } from "lucide-react"
 
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import HeaderAdjustment from "@/common/HeaderAdjustment";


const ProductsDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: 'Carousel 1 - Slide 1 Content', imgSrc: wc1 },
    { id: 2, content: 'Carousel 1 - Slide 2 Content', imgSrc: wc2 },
    { id: 3, content: 'Carousel 1 - Slide 3 Content', imgSrc: wc3 },
    { id: 4, content: 'Carousel 1 - Slide 3 Content', imgSrc: wc4 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-12 w-full min-h-[100vh] md:px-12 px-8 py-4">

      <HeaderAdjustment/>

      {/* Product detail with the left-right */}
      <div className="flex md:flex-row flex-col items-center">
        {/* Left side content */}
        <div className=" flex flex-col md:w-[35rem] md:min-h-[30rem]  justify-center items-center">
          <div className="relative flex items-center justify-center max-w-[30rem] md:h-[28rem] h-[20rem] rounded-lg overflow-hidden">
            {/* Left Arrow */}
            <FiChevronLeft
              className="absolute left-5 text-secondary text-[1.8rem] cursor-pointer bg-pink-500 rounded-full z-10"
              onClick={prevSlide}
            />

            {/* Slide Image with Animation */}
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].imgSrc}
              alt={slides[currentSlide].content}
              className="w-full h-full object-contain "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            />

            {/* Right Arrow */}
            <FiChevronRight
              className="absolute right-5 text-secondary text-[1.8rem] cursor-pointer bg-pink-500 rounded-full z-10"
              onClick={nextSlide}
            />
          </div>

           {/* Thumbnails */}
            <div className="flex justify-center mt-8  space-x-4">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`w-20 h-20 rounded-lg border-2 ${
                    currentSlide === index ? "border-pink-500" : "border-gray-300"
                  } cursor-pointer overflow-hidden`}
                  onClick={() => selectSlide(index)}
                >
                  <img
                    src={slide.imgSrc}
                    alt={slide.content}
                    className="w-full h-full object-cover shadow-lg shadow-pink-500"
                  />
                </div>
              ))}
            </div>

        </div>

        {/* right side content */}
        <div className=" flex flex-col w-full  md:w-[35rem] md:min-h-[30rem] justify-start items-center md:px-4">

          <h2 className=" text-[1.9rem] font-semibold leading-[2.8rem] text-neutral-700">
          Here's to All the Happiness Ahead for You Wedding Card
          
          </h2>
            <div className=" w-full flex flex-col justify-start items-start font-medium text-neutral-700">

              {/* price */}
              <p>
                $7.99
              </p>

              {/* review */}
              <p>
                4start
              </p>


                {/* details for the accordian */}
              <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className =" ">Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
              </Accordion>

            
            {/*  share button website */}
            <Dialog >
              <DialogTrigger asChild>

              <Button variant="outline" className=' mt-2 hover:bg-pink-500 border border-pink-500 text-pink-500 hover:text-white flex justify-center items-center gap-2'>
                <IoShareSocialOutline />
                Share
              </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://ui.shadcn.com/docs/installation"
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          
              <div className=" flex justify-center items-center mt-4 w-full gap-6 ">

               {/* Qty for product */}
                <div className=' flex justify-between items-center-center min-w-[25%]  py-1 px-1  border-[0.1rem] border-pink-500  md:rounded-[3rem] rounded-[0.8rem]'>
                  <HiMinusSm className=' text-2xl cursor-pointer text-pink-500' />
                  {2}
                  <BsPlus className=' text-2xl cursor-pointer text-pink-500' />
                </div>
                <Button
                    translateZ={20}
                    as="button"
                    className=" w-full px-4  rounded-xl border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all text-pink-500 text-xs font-bold"
                  >
                    Add To Cart
                </Button>
              </div>

              </div>
        </div>
      </div>

     
    </div>
  );
};

export default ProductsDetails;
