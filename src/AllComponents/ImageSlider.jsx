import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ImagesSlider } from '@/components/ui/images-slider';
import { motion } from "framer-motion";

const ImageSlider = () => {
    const images = [
        "https://res.cloudinary.com/drj0uehgx/image/upload/v1734503413/banner1_ast0ox.jpg",
        "https://cdn.vectorstock.com/i/500p/26/78/watercolor-set-wedding-invitation-card-vector-51672678.jpg",
        "https://cdn.vectorstock.com/i/500p/70/53/vintage-ticket-wedding-invitation-vector-9017053.jpg",
        "https://res.cloudinary.com/drj0uehgx/image/upload/v1734503412/banner5_bdgal3.jpg",
      ];
      return (
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-50 to-pink-400 py-4 ">
              The hero section slideshow <br /> nobody asked for
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-pink-300/10 border-pink-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-pink-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      );
    }
export default ImageSlider

