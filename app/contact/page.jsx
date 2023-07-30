"use client"

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";



export default function Contact() {
    return (
        <AnimatePresence mode="wait">
        <main className="main-contact">
            <section> 
                <motion.div 
                    className="contact-header"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{delay: 1.3, duration: 0.8}}
                    >
                    <h1>We should work <br></br> together.</h1>
                </motion.div> 
                 <motion.div  
                    className="contact-email"
                    initial={{ opacity: 0, x: '-160px'}}
                    animate={{ opacity: 1,  x: '0'}}
                    exit={{ opacity: 0,  x: '-160px' }}
                    transition={{delay: 1.3, duration: 0.9}}
                 >
                    <p>Business inquiries / Contact</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            mersim@gmail.com
                        </Link>
                        <span></span>
                    </div>   
                </motion.div>
                <motion.div  
                    className="contact-socials"
                    initial={{ opacity: 0, x: '-220px'}}
                    animate={{ opacity: 1,  x: '0'}}
                    exit={{ opacity: 0,  x: '-220px' }}
                    transition={{delay: 1.3, duration: 0.9}}
                 >
                    <p>Checkout my</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            Facebook
                        </Link>
                        <span></span>
                    </div>     
                </motion.div>
                <motion.div  
                    className="contact-socials"
                    initial={{ opacity: 0, x: '-260px'}}
                    animate={{ opacity: 1,  x: '0'}}
                    exit={{ opacity: 0,  x: '-260px' }}
                    transition={{delay: 1.3, duration: 0.9}}
                 >
                    <p>Follow me on</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            Instagram
                        </Link>
                        <span></span>
                    </div>     
                </motion.div>
            </section>
        </main>
        </AnimatePresence>
    );
}