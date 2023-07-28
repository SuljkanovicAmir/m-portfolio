"use client"
import Image from 'next/image';
import Logo from '../public/logo.png'
import { motion } from 'framer-motion';


export default function Loading() {
    return (
        <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1, translateY: 0, translateX: 0 }}
                    animate={{ opacity: 1, translateY: 0 , translateX: 0 }}
                    exit={{ opacity: 1, translateY: '-100%', translateX: 0 }}
                    transition={{ duration: 0.3 }}
                    onAnimationStart={() => console.log('Animation is starting')} // Add this line to check if the animation is starting
                    onAnimationComplete={() => console.log('Animation is complete')} // Add this line to check if the animation is complete
                >
            <div>
                <Image className="loading-image" src={Logo} height={100} width={100} />
                <div className="shadow"></div>
            </div>
           
            </motion.div>
    );
}