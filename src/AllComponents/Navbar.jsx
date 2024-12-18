import * as React from "react"
import { MdLocationPin } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { GoPersonAdd } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import {MdDashboardCustomize, MdKeyboardArrowDown} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryName } from "@/data";


export function NavigationMenuDemo() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
  
    React.useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

   
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)

    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col w-full min-h-[4rem] shadow-xl shadow-pink-100">
        <div className="w-full md:flex hidden h-12 justify-between items-center bg-pink-50 px-4">
            <div className=" text-sm flex justify-center items-center cursor-pointer gap-2">

                <MdLocationPin className=" text-pink-500 "/>
                <p className=" text-pink-400 hover:text-pink-500  ">We Are Here</p>
            </div>
        </div>
  
        {/* Sticky navbar */}
        <nav 
            className={"flex items-center justify-between w-full relative h-[4.1rem] px-2"
            }>
            <img 
            src="https://i.ibb.co/0BZfPq6/darklogo.png" onClick={() => navigate("/")} alt="logo" className="w-[60px] cursor-pointer"/>
            <ul className="items-center gap-[20px] text-[0.8rem] text-[#424242] lg:flex hidden">
                
                {categoryName?.map((category) => (
                    <li 
                        key={category.id} 
                        className="transition-all duration-500 cursor-pointer hover:text-pink-500 capitalize flex items-center gap-[3px] group relative"
                        onMouseOver={() => setAboutHover(true)}
                        onMouseLeave={() => setAboutHover(false)}
                        onClick={() => navigate(category.url)}
                        >
                    {category?.name}
                    {category?.name !== "Home" &&<MdKeyboardArrowDown
                        className="text-[1rem] text-[#424242] group-hover:text-pink-500 transition-all duration-500 group-hover:rotate-[180deg]"/>
                        }
                   { category?.name !== "Home" &&<article
                        className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                {category?.subCategory?.map((sub) => (
                                <li key={sub?.id} className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]" /> {sub.name}
                                </li>
                                ))}
                            </ul>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                            className="w-full object-cover mt-4 rounded-sm h-[150px]" />
                    </article>}
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-[10px] ">
                <div className="relative ml-4 md:ml-0 text-sm ">
                    <input
                        className="py-1.5   border border-text pl-10 md:w-full w-[90%] rounded-full outline-none focus:border-pink-500"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-pink-500 text-[1.3rem]"/>
                </div>

                <div className="relative flex items-center  gap-[15px]" onClick={() => navigate("/addtocart")}>
                    <TiShoppingCart className="text-pink-500 cursor-pointer text-[1.5rem] relative" />
                    <div className="absolute top-[-8px] right-[-8px] flex items-center justify-center bg-pink-500 text-white text-[0.7rem] w-[18px] h-[18px] rounded-full">
                    3 
                    </div>
                </div>


                <GoPersonAdd
                    className="text-[1.5rem] cursor-pointer text-pink-500 transition-all duration-500 "/>
                <FaRegHeart
                    className="text-[1.4rem]  cursor-pointer text-pink-500 transition-all duration-500"/>

                <CiMenuFries 
                    className="text-[1.6rem] text-pink-500 font-semibold cursor-pointer lg:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={`${
                    mobileSidebarOpen
                    ? "translate-x-0 opacity-100 z-20"
                    : "translate-x-[200px] opacity-0 z-[-1]"
                } lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
                >
                <ul className="items-start gap-[20px] text-[0.8rem] text-gray-600 flex flex-col">
                    {categoryName?.map((category) => (
                    <li key={category.id} className="flex flex-col">
                        {/* Main category */}
                        <div
                        onClick={() =>
                            setMobileSidebarOpen((prev) => ({
                            ...prev,
                            [category.id]: !prev[category.id],
                            }))
                        }
                        className="hover:text-pink-500 group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
                        >
                            
                        {category.name}
                        {category.name !== "Home" && (
                            <IoIosArrowDown
                                className={`${
                                mobileSidebarOpen[category.id] ? "rotate-[180deg]" : "rotate-0"
                                } text-gray-600 group-hover:text-pink-500 transition-all duration-300`}
                            />
                            )}
                        </div>

                        {/* Subcategory menu */}
                        {mobileSidebarOpen[category.id] && (
                        <ul className="flex flex-col gap-[7px] text-[#424242] ml-6">
                            {category?.subCategory?.map((sub) => (
                            <li
                                key={sub.id}
                                onClick={() => navigate(`${category.url}/${sub.name.toLowerCase()}`)}
                                className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300"
                            >
                                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                                {sub.name}
                            </li>
                            ))}
                        </ul>
                        )}
                    </li>
                    ))}
                </ul>
                </aside>

        </nav>
      </div>
    );
  }
  