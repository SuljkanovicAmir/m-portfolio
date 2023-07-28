"use client"

import Image from 'next/image'
import Link from 'next/link'
import PreviewedProjects from './components/PreviewedProjects'
import Arrow from '../public/arrow.svg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

export default function Home() {

  const [section2Ref, inViewSection2] = useInView({
    rootMargin: '-100px 0px', // Adjust this value to set the threshold for the trigger
  });

  const isMobileScreen = useIsMobileScreen(); // Custom function to check if it's a mobile screen

  const section2Animation = {
    hidden: { x: isMobileScreen ? '60%' : '110%', opacity: 0 },
    visible: { x: isMobileScreen ? '40px' : '300px', opacity: 1 },
  };


  return (
    <>
    <main className='main'>
        <section className='section'>
          <div>
            <h1>Transforming vision into breathtaking reality.</h1>
            <Link href="/projects" className='section-hover underline'>
                <div className="flip-wrap">
                  <div className="flip">
                      <span>Projects</span>
                      <span>Projects</span>
                  </div>
                </div>
              </Link>  
          </div> 
        </section>
        <motion.section
          ref={section2Ref}
          initial='hidden'
          animate={inViewSection2 ? 'visible' : 'hidden'}
          variants={section2Animation}
          transition={{ duration: 0.8 }} // Adjust the animation duration as needed
          className='section2'
        >
            <div></div>
            </motion.section>
        <section className='section3'>
            <div className='section3-div'>
              <Image src={Arrow}className='section-arrow' alt='arrow' unoptimized width={100} height={100}/>
              <h1>Projects</h1>
              <div className='section-hover'>
                <Link href="/projects">
                  View all
                </Link>
                <span></span>
              </div>
            </div>
            <PreviewedProjects />
        </section>
    </main>
</>
  )
}


function useIsMobileScreen() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint to match your mobile screen size
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}