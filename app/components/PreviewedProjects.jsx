"use client";

import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Logo from "../../public/logo_bg.svg";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function PreviewedProjects() {
  const [results, setResults] = useState([]);
  const [projectsRef, inViewProjects] = useInView({
    triggerOnce: false,
    rootMargin: "-50px 200px", // Adjust this value to set the threshold for the trigger
  });

  console.log(inViewProjects);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await getProjects();
      console.log(projects);
      setResults(projects);
    }
    fetchProjects();
  }, []);

  return (
    <div ref={projectsRef} className="projects">
      {results.length > 0 && (
        <>
          {results.slice(0, 3).map((data) => (
            <motion.div
              initial={{ opacity: 0, x: "200px" }}
              animate={inViewProjects ? { opacity: 1, x: "0px" } : {}}
              exit={{ opacity: 0, x: "200px" }}
              transition={{
                delay: 0,
                duration: 1,
                ease: [0.7, 0, 0.3, 1],
              }}
              className="preview-project-div"
              key={data._id}
            >
              <Link href={"projects/" + data.slug}>
                <div
                  className="background"
                  style={{
                    backgroundImage: `url(${
                      data.images ? data.images[0] : Logo
                    })`,
                  }}
                ></div>
                <p>{data.name}</p>
              </Link>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}
