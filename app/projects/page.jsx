"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from '../../public/logo_bg.svg'
import { getProjects } from "@/sanity/sanity-utils";
import Loading from "@/app/loading";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Projects() {

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            const projects = await getProjects()
            console.log(projects)
            setResults(projects);
            setTimeout(() => setIsLoading(false), 600);
        }
        fetchProjects();
      }, []);

      if (isLoading) {
        return <Loading /> 
      }

  return (
    <main className="main-projects">
         <section className='projects-header'>
          <div>
            <h1>A Showcase of My Projects</h1>
          </div> 
        </section>
        <div className="projects-container">
        {results.length > 0 && (
          <>
            {results.map(data => (
              <ProjectItem key={data.id} data={data} />
            ))}
          </>
        )}
      </div>
      </main>
  );
}


const ProjectItem = ({ data }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="project-div"
      key={data.id}
    >
      <Link href={'projects/' + data.slug}>
        <div className="background" style={{ backgroundImage: `url(${data.images ? data.images[0] : Logo})` }}></div>
        <p>{data.name}</p>
      </Link>
    </motion.div>
  );
};


