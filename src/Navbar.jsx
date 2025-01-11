import React, { useState, useEffect } from 'react';
import './App.css'; 
import pkbImg from "./assets/pkb.jpeg"


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div style={{width:`${isMobile?"100%":"60px"}`}} className="logo">
        <div>
          <img style={{width:"60px",height:"40px"}} src={pkbImg} alt="" />  

        </div>
        
        {isMobile &&
        <>
        {!isMenuOpen ? <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>:
        /*   <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid white", height:"25px",width:"25px",borderRadius:"50%"}}> */
          <button
          className="hamburgerx"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          x
        </button>
        
          }
          </>
           }   
          
      </div>
      {isMobile ? (
        <>
          
          {isMenuOpen && (
            <div className="mobile-menu">
              
          <div className='flexing-options'>
            
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="desktop-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;