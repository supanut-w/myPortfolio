import React, {useState, useEffect} from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from '../compenents/Nav';
import NavMobile from '../compenents/NavMobile';
import Socials from '../compenents/Socials';

const Header = () => {
   const [bg, setBg] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         return window.scrollY > 50 ? setBG(true) : setBg(false);
      });
   });

   return (
      <header className={`${bg ? 'bg-tertiary h-20' : 'h-24' } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
         <div className="container mx-auto">header</div>
      </header>
   );
}

export default Header;