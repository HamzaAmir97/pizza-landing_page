import React, { useState } from 'react';
import { MdLanguage, MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add actual dark mode implementation here
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    // Add actual language switching logic here
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
   
   <div className= ' sticky top-0 z-50 rounded-b-full   bg-yellow-600 h-15 w-screen '>
   <div className=' flex flex-col md:flex-row lg:flex-row items-center justify-between'>
   
    
   </div>


          </div>
  );

};

export default Navbar;
