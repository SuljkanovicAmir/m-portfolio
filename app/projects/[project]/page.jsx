"use client"

import { useState, useEffect, useRef } from "react";
import { getProject } from "@/sanity/sanity-utils";
import Logo from '../../../public/logo_bg.svg'
import Link from "next/link";
import Flickity from 'react-flickity-component'
import Image from "next/image";


export default function Project ({ params }) {

    const slug = params.project;

    const [results, setResults] = useState([]);

    const flickityOptions = {
      initialIndex: 0
  }

    useEffect(() => {
        async function fetchProjects() {
            const project = await getProject(slug)
            setResults(project);
        }
        fetchProjects();
      }, []);

 
      useEffect(() => {
        initFlickity();
      }, []);
    
      const carousel = useRef(null);
    
      async function initFlickity() {
        if (typeof window !== 'undefined' && carousel.current) {
          const Flickity = (await import('flickity')).default;
          new Flickity(carousel.current, {
            lazyLoad: true,
            wrapAround: true,
            autoPlay: true,
          });
        }
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
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            lazyLoad={true}

          >
           {results.images?.map(image =>
    
                  <div className="gallery-cell hidden" style={{backgroundImage: `url(${ image ? image  : Logo})`}}></div>
                )}
          </Flickity>
        
        </main >
      );
}




/* 
          <div  ref={carousel} className="gallery js-flickity">
            <div >
                   <Image className="gallery-cell"  src={image}  width={1024} height={1024}/>
            </div>
          
          </div> */