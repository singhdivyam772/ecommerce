"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaCartArrowDown, FaUserAlt, FaHeart   } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

// import { IoCartOutline } from "react-icons/io5";
// react icons
// import {FaTasks} from "react-icons/fa";
// import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// import {TbLogout2, TbUsersGroup} from "react-icons/tb";
// import {CiMenuFries} from "react-icons/ci";
// import {MdLaptopMac, MdOutlineArrowRightAlt, MdOutlineKeyboardArrowRight} from "react-icons/md";
// import {BsBuildings, BsCalendar2Date} from "react-icons/bs";
// import {AiOutlineFire} from "react-icons/ai";
// import {BiSupport} from "react-icons/bi";
// import {FiUser} from "react-icons/fi";
// import {IoSettingsOutline} from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { GoPersonAdd } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

import {FaDiscord} from "react-icons/fa";
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {MdDashboardCustomize, MdKeyboardArrowDown} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import {CgIfDesign} from "react-icons/cg";
import {FaCubesStacked} from "react-icons/fa6"



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
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isProductHover, setIsProductHover] = useState(false)
    // const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false)
    const [megaMenuSubItem, setMegaMenuSubItem] = useState("")

    const [aboutHover, setAboutHover] = useState(false)
    const [serviceHover, setServiceHover] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)

    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col w-full min-h-[4rem] shadow-2xl">
        <div className="w-full h-12 flex justify-between items-center bg-pink-50 px-4">
            <div className=" text-sm flex justify-center items-center cursor-pointer gap-2">

                <MdLocationPin className=" text-pink-500 "/>
                <p className=" text-pink-400 hover:text-pink-500  ">We Are Here</p>
            </div>
        </div>
  
        {/* Sticky navbar */}
        <nav 
            className={"flex items-center justify-between w-full relative h-[4.1rem] px-2"
            }>
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/>
            <ul className="items-center gap-[20px] text-[0.8rem] text-[#424242] lg:flex hidden">
                <li 
                onClick={() => navigate("/")}
                className="transition-all duration-500 cursor-pointer hover:text-pink-500 capitalize flex items-center gap-[3px] group relative">
                    Home
                </li>
                {categoryName?.map((category) => (
                    <li 
                        key={category.id} 
                        className="transition-all duration-500 cursor-pointer hover:text-pink-500 capitalize flex items-center gap-[3px] group relative"
                        onMouseOver={() => setAboutHover(true)}
                        onMouseLeave={() => setAboutHover(false)}
                        onClick={() => navigate(category.url)}
                        >
                    {category?.name}
                    <MdKeyboardArrowDown
                        className="text-[1rem] text-[#424242] group-hover:text-pink-500 transition-all duration-500 group-hover:rotate-[180deg]"/>
                    <article
                        className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                {category?.subCategory.map((sub) => (
                                <li key={sub?.id} className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]" /> {sub.name}
                                </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                                    Full Customize
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                            className="w-full object-cover mt-4 rounded-sm h-[150px]" />
                    </article>
                    </li>
                ))}
                </ul>

            <div className="flex items-center gap-[10px]">
                <div className="relative lg:flex hidden">
                    <input
                        className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-pink-500"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
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

                <CiMenuFries className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-[20px] text-[0.8rem] text-gray-600 flex flex-col">

                    <li className="hover:text-pink-500 group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Home
                    </li>

                    <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                        className="hover:text-pink-500 group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        About Us
                        <IoIosArrowDown
                            className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-gray-600 group-hover:text-pink-500 transition-all duration-300`}/>
                    </li>

                    {/* about us mega menu */}
                    <div className={`${mobileAboutUsOpen ? "block" : "hidden"} group font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] text-[#424242]">
                            <li className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                            <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                          
                        </ul>

                       
                    </div>


                    <li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="hover:text-pink-500 group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Service
                        <IoIosArrowDown
                            className={`${mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-pink-500 transition-all duration-300`}/>
                    </li>

                    {/* service mega menu */}
                    <div className={`${mobileServiceOpen ? "hidden" : "block"} font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] text-[#424242]">
                            <li className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                                 <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/> Company
                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-pink-500 transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                           
                        </ul>

                       
                    </div>
                </ul>
            </aside>
        </nav>
      </div>
    );
  }
  