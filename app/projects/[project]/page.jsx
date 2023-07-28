"use client"

import { useState, useEffect, useRef } from "react";
import { getProject } from "@/sanity/sanity-utils";
import Logo from '../../../public/logo_bg.svg'
import Link from "next/link";
import Flickity from 'react-flickity-component'
import Image from "next/image";
import { Suspense } from 'react'
import Loading from "@/app/loading";
import { motion, AnimatePresence  } from "framer-motion";


export default function Project ({ params }) {

    const slug = params.project;

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const flickityOptions = {
      fullscreen: true,
      initialIndex: 0
  }

    useEffect(() => {
        async function fetchProjects() {
            const project = await getProject(slug)
            setResults(project);
            setTimeout(() => setIsLoading(false), 400);
        }
        fetchProjects();
      }, []);


    if (isLoading) {
        return <Loading /> 
      }
    
 
    if (!results) {
        console.log("Project not found");
        return <div>Project not found</div>;
      }


      

      return (
        <main className="main-project">
          <section className='project-header'>
            <div>
              <h1>{results.name}</h1>
            </div> 
            </section>
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate= {{
                  opacity: [0, 0.2, 1],
                  transition: { duration: 0.4, times: [0, 0.5, 1], ease: "easeInOut", delay: 0.3 },
                }}
                 exit={{ opacity: 0 }}

      
              >
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                lazyLoad={true}
              >
                  {results.images?.map((image, index) =>
                      <div key={index} className="gallery-cell hidden" style={{backgroundImage: `url(${ image ? image  : Logo})`}}>
                        <Link target="_blank" className="full-image"href={image}>
                          Open Image
                        </Link>
                      </div>
                    )}
              </Flickity>
            </motion.div>
            </AnimatePresence>

          <div className="back-to-projects">
            <Link href="/projects" className='section-hover underline'>
                  <div className="flip-wrap">
                    <div className="flip">
                        <span>Back to Projects</span>
                        <span>Back to Projects</span>
                    </div>
                  </div>
            </Link>       
          </div>
        </main >
      );
}




/* 

Sa Framer Motion dodati opacity na Flikity dok se ne loada 
Također dodati Framer motion na druge componente 
Srediti responsivitiy
*/