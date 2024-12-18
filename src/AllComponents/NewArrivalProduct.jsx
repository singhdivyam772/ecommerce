import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { BsEye } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx"; // Close icon

const weddingCards = [
    {
        id: 1,
        name: "Elegant Wedding Card",
        price: "$25",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1260.jpg",
    },
    {
        id: 2,
        name: "Classic Scrolling Invitation",
        price: "$30",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1187.jpg",
    },
    {
        id: 3,
        name: "Modern Theme Wedding Card",
        price: "$40",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1190.jpg",
    },
    {
        id: 4,
        name: "Vintage Wedding Invitation",
        price: "$35",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1232.jpg",
    },
    {
        id: 5,
        name: "Luxury Scroll Wedding Card",
        price: "$28",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S1100.jpg",
    },
    {
        id: 6,
        name: "Premium Wedding Card",
        price: "$50",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S898.jpg",
    },
    {
        id: 7,
        name: "Floral Design Invitation Card",
        price: "$60",
        src: "https://d3u33zzulaaffk.cloudfront.net/Product-Medium/S932.jpg",
    },
];

const NewArrivalProduct = () => {
    const [modalImage, setModalImage] = useState(null); // Track which image is in the modal

    const openModal = (src) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-6 p-4">
                {weddingCards.map((data) => (
                    <div 
                        key={data.id}
                        className="w-full cursor-pointer shadow-lg shadow-pink-200 bg-secondary rounded relative"
                    >
                        <BsEye
                            className="absolute z-10 top-3 right-3 text-pink-500 text-2xl cursor-pointer"
                            onClick={() => openModal(data.src)}
                        />
                        <img
                            src={data.src}
                            alt={data.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="flex w-full justify-between items-center p-1">
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col items-center">
                                    <h2 className="font-semibold text-md">{data.name}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full p-1 py-3">
                            <div className="flex flex-col items-center gap-4">
                                <div>
                                    <p className="text-text text-[0.9rem]">Price : {data.price}</p>
                                </div>
                            </div>
                            <Button 
                                translateZ={20}
                                as="button"
                                className="px-4 rounded-xl border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all text-pink-500 text-xs font-bold"
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalImage && (
                <div
                    className={`${
                        modalImage ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
                    } fixed inset-0 w-full h-screen bg-black bg-opacity-75 flex items-center justify-center z-50 transition-all duration-300`}
                    onClick={closeModal}
                >
                    <div 
                        className="w-[80%] h-[80%] bg-white rounded-lg  p-4 relative" 
                        onClick={(e) => e.stopPropagation()}                     >
                        <div className="w-full flex items-end justify-end ">
                            <RxCross1
                                className=" text-[1.5rem] p-1 hover:text-pink-500  hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                                onClick={closeModal}
                            />
                        </div>
                        <div className="w-full h-full mt-[-2.3rem] flex items-center justify-center">
                            <img
                                src={modalImage}
                                alt="Full View"
                                className=" h-full rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewArrivalProduct;
