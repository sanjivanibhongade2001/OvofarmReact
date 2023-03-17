import React from 'react'
import './header.css'
import { useRef } from 'react';
import ovofarm from './images/Ovofarm.png';
import search from './images/search.png';


export default function header() {
  
  const Navref = useRef();
  const setOpen = () => {
    Navref.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (

  <header className="header">
        <nav className="navBar">
            <img src={ovofarm} id="logo" alt="" />
            <ul className="navList">
                <li className="navItem">Home</li>
                <li className="navItem">About Us</li>
                <li className="navItem">Products</li>
                <li className="navItem">Benefits</li>
                <li className="navItem">Kenko Nutri Club</li>
                <li className="navItem">Health Corner</li>
                <li className="navItem">Events</li>
                <li className="navItem">Contact Us</li>
                <li className="navItem">Employee Desk</li>
            </ul>
            <div className="search">
                <div className="hamberger" onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <input type="search" name="" id="" placeholder="Serach..." />
                <button type="submit"><img src={search} alt="Search" /></button>
            </div>
        </nav>
        <nav onClick={() => setOpen(false)} className="navMenu" style={{ transform: open ? "translate(0)" : "translate(1000px)" }}>
            <img src={ovofarm} onClick={() => setOpen(false)} className="close" alt="" />
            <ul className="menuList">
                <li className="menuItem">Home</li>
                <li className="menuItem">About Us</li>
                <li className="menuItem">Products</li>
                <li className="menuItem">Benefits</li>
                <li className="menuItem">Kenko Nutri Club</li>
                <li className="menuItem">Health Corner</li>
                <li className="menuItem">Events</li>
                <li className="menuItem">Contact Us</li>
                <li className="menuItem">Employee Desk</li>
            </ul>
            <div className="search">
                <input type="search" name="" id="" placeholder="Serach..." />
                <button type="submit"><img src="/search-30.png" alt="" /></button>
            </div>
        </nav>
    </header>
  )
}
