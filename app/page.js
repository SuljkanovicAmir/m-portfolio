"use client";

import Image from "next/image";
import Link from "next/link";
import PreviewedProjects from "./components/PreviewedProjects";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FB from "../public/fb.svg";
import EmailIcon from "../public/email.svg";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [section2Ref, inViewSection2] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px", // Adjust this value to set the threshold for the trigger
  });

  const [section3spanRef, inViewSection3Span] = useInView({
    triggerOnce: false,
    rootMargin: "-10px 0px", // Adjust this value to set the threshold for the trigger
  });

  const isMobileScreen = useIsMobileScreen(); // Custom function to check if it's a mobile screen

  const section2Animation = {
    hidden: {
      x: isMobileScreen ? "10%" : "110%",
      opacity: isMobileScreen ? 1 : 0,
    },
    visible: { x: isMobileScreen ? "10%" : "400px", opacity: 1 },
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="main">
        <section className="section">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-400px" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "-400px" }}
              transition={{ delay: 0, duration: 1 }}
            >
              Transforming vision into breathtaking reality.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: "200px" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0, y: "200px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {isMobileScreen ? (
                <div className="socials">
                  <Link
                    href="https://www.facebook.com/mersim.suljkanovic.73"
                    target="_blank"
                  >
                    <Image
                      src={FB}
                      unoptimized
                      className="social-img"
                      alt="arrow"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <Link href="mailto:example@gmail.com" target="_blank">
                    <Image
                      src={EmailIcon}
                      unoptimized
                      className="social-img"
                      alt="arrow"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              ) : (
                <Link href="/contact" className="section-hover underline">
                  <motion.div className="flip-wrap">
                    <div className="flip">
                      <span>Contact</span>
                      <span>Contact</span>
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>
        </section>
        <motion.section
          ref={section2Ref}
          initial="hidden"
          animate={inViewSection2 ? "visible" : "hidden"}
          variants={section2Animation}
          transition={{ duration: 1 }} // Adjust the animation duration as needed
          className="section2"
        >
          <div></div>
        </motion.section>
        <section className="section3">
          <div className="section3-div">
            <div className="span-div">
              <motion.span
                ref={section3spanRef}
                initial={{ opacity: 0, width: "0px" }}
                animate={
                  inViewSection3Span ? { opacity: 1, width: "100px" } : {}
                }
                exit={{ opacity: 0, width: "0px" }}
                transition={{
                  delay: 0.1,
                  duration: 1.2,
                  ease: [0.7, 0, 0.3, 1], // cubic-bezier easing function
                }}
              ></motion.span>
            </div>
            <motion.h1
              ref={section3spanRef}
              initial={{ opacity: 0, x: "100px" }}
              animate={inViewSection3Span ? { opacity: 1, x: "0px" } : {}}
              exit={{ opacity: 0, x: "100px" }}
              transition={{
                delay: 0,
                duration: 1.2,
                ease: [0.7, 0, 0.3, 1], // cubic-bezier easing function
              }}
            >
              Select Projects
            </motion.h1>
          </div>
          <PreviewedProjects />
          <div className="projects-link">
            <Link href="/projects" className="section-hover underline">
              <div className="flip-wrap">
                <div className="flip">
                  <span>View Projects</span>
                  <span>View Projects</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function useIsMobileScreen() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint to match your mobile screen size
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
