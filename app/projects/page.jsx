"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from '../../public/logo_bg.svg'
import { getProjects } from "@/sanity/sanity-utils";


export default function Projects() {

  const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const projects = await getProjects()
            console.log(projects)
            setResults(projects);
        }
        fetchProjects();
      }, []);

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
                        <div className="project-div" key={data.id}>
                        <Link href={'projects/' + data.slug}> 
                            <div className="background" style={{backgroundImage: `url(${data.images ? data.images[0]  : Logo})`}}></div>
                            <p>{data.name}</p>
                        </Link>
                    </div>
                    ))}
                </>
            )}
        </div>
      </main>
  );
}