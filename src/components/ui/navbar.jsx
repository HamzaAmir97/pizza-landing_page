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

     {/* Navbar desktop */}
   <div className=' flex justify-center '>
   

     <ul className='flex flex-row justify-center items-center p-2'> 
      <li>
        <a href='/' className='text-white text-2xl font-bold p-5'>Home</a>
      </li>
      <li>
        <a href='/menu' className='text-white text-2xl font-bold p-5'>Menu</a>
      </li>
      <li>
        <a href='/about' className='text-white text-2xl font-bold p-5'>About</a>
      </li>
      <li>
        <a href='/contact' className='text-white text-2xl font-bold'>Contact</a>
      </li>
     </ul>
   </div>
  {/* Navbar mobile */}

   <div className='lg:hidden flex flex-row justify-center items-center p-2'>
    <ul className='flex flex-row justify-center items-center p-2'> 
      <li>
        <a href='/' className='text-white text-2xl font-bold p-5'>Home</a>
      </li>
    </ul>
          </div>

   </div>
        
  );

};

export default Navbar;
