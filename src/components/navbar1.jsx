import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function s() {
  const [openNav, setOpenNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scrolling logic
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Scroll ke bawah, sembunyikan navbar
    } else {
      setShowNavbar(true); // Scroll ke atas, tampilkan navbar
    }
    setLastScrollY(window.scrollY);
  };

  // Handle resizing window
  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      className={`fixed top-2 left-0 right-0 z-50 mx-auto pt-5 max-w-screen-lg bg-[#2F4750] px-6 py-3 shadow-lg rounded-lg transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex items-center">
        {/* Logo di pojok kiri */}
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="absolute left-0 cursor-pointer text-gray-100 font-bold"
        >
          Acelino
        </Typography>

        {/* Navigation links di tengah */}
        <div className="hidden lg:flex mx-auto items-center space-x-8">
          <a
            href="#home"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
       
          <a
            href="#work"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Work
          </a>
        </div>

        {/* Mobile menu toggle button di pojok kanan */}
        <IconButton
          variant="text"
          className="absolute right-0 lg:hidden h-6 w-6 text-gray-100 hover:bg-transparent focus:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Collapsible mobile menu */}
      <Collapse open={openNav}>
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          <a
            href="#home"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >

          </a>
          <a
            href="#contact"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
          <a
            href="#work"
            className="relative text-gray-200 font-medium hover:text-teal-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Work
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
}
