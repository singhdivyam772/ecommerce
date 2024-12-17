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

import { IoCartOutline } from "react-icons/io5";



const components= [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

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
  
    return (
      <div className="flex flex-col w-full min-h-[4rem] shadow-2xl">
        <div className="w-full h-12 flex justify-between items-center bg-pink-50 px-4">
            <div className=" text-sm flex justify-center items-center cursor-pointer gap-2">

                <MdLocationPin className=" text-pink-500 "/>
                <p className=" text-pink-400 hover:text-pink-500  ">We Are Here</p>
            </div>
        </div>
  
        {/* Sticky navbar */}
        <div
          className={`
            fixed w-full h-[4rem] bg-white flex justify-between items-center px-6 shadow z-50 transition-all ease-in-out
            ${scrollPosition > 10 ? "top-0" : "top-12"}
          `}
        >
          {/* logo */}
          <div>
           <img 
           className=" w-[4rem] h-12 rounded-full "
            src="https://res.cloudinary.com/drj0uehgx/image/upload/v1733998721/DALL_E_2024-12-12_15.40.43_-_A_modern_and_elegant_logo_for_an_e-commerce_website_specializing_in_cards_and_gifts._The_design_features_a_stylized_gift_box_with_a_ribbon_incorporat_keuf0h.webp" alt="" srcset="" />
          </div>
  
          {/* Navigation menu */}
          <NavigationMenu className=" text-pink-500 ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="">Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
  
          {/* admin cart searchbox */}
          <div className="flex justify-center items-center gap-5">
            <div className=" relative">
              <FaCartArrowDown className=" text-pink-500 text-xl" />
              <span className=" absolute z-10 top-[-0.8rem] left-[0.49rem]  ">
                  <p className=" text-sm  font-bold text-green-500">
                    1
                  </p>
                </span>
            </div>
            <FaHeart  className=" text-pink-500 text-xl" />
            <FaUserAlt className=" text-pink-500 text-xl" />
          </div>
        </div>
      </div>
    );
  }
  
  const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";
