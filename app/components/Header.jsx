"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png'
import Burger from '../../public/burger.svg'
import Close from '../../public/close.svg'

import { useState, useEffect } from "react";


export default function() {

  const [isActive, setIsActive] = useState(false);
  const [activeTransition, setActiveTransition] =  useState()

  useEffect(() => {
    if(activeTransition === true) {
      setTimeout(() => {
        setActiveTransition(false);
    }, 1500)
    }
  },[activeTransition])

  const handleClick = event => {
    setIsActive(current => !current);
    setActiveTransition(current => !current)
  };



    return (
        <header>
              <nav>
                <div className={activeTransition ? 'transition anim-trans' : 'transition'}></div>
                <Link href="/">
                      <Image className="logo-img" src={Logo} priority alt='logo' width={500} height={500}/>
                </Link>
                <ul  className={isActive ? 'ul-nav show' : 'ul-nav'}>
                  <button className={isActive ? 'burger2 show' : 'burger2'} onClick={handleClick}>
                    <Image src={Close} priority alt='close' width={200} height={200}/>
                  </button>
                  <li className='list header-about'>
                      <Link onClick={handleClick} href="/about">
                        About
                      </Link>
                    </li>
                    <li className='list'>
                      <Link onClick={handleClick} href="/projects">
                        Projects
                      </Link>
                    </li>
                    <li className='list'>
                      <Link onClick={handleClick} href="/search" className='search'>
                        Contact
                      </Link>
                    </li>  
                  </ul>
                  <button className={isActive ? 'burger hidden' : 'burger '} onClick={handleClick}>
                    <Image src={Burger} priority alt='burger' width={200} height={200}/>
                  </button>
                </nav>
              
          </header>
    );
}