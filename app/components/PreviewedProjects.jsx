"use client"

import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Logo from '../../public/logo_bg.svg'
import { useState, useEffect } from "react";




export default function PreviewedProjects() {

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
        <div className="projects">
            {results.length > 0 && (
                <>
                    {results.slice(0, 3).map(data => (
                        <div className="preview-project-div" key={data._id}>
                        <Link href={'projects/' + data.slug}> 
                            <div className="background" style={{backgroundImage: `url(${data.images ? data.images[0]  : Logo})`}}></div>
                            <p>{data.name}</p>
                        </Link>
                    </div>
                    ))}
                </>
            )}
        </div>
    );
}


