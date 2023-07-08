
import Link from "next/link";
import Logo from '../../public/logo_bg.svg'
import { getProjects } from "@/sanity/sanity-utils";


export default async function Projects() {

  const projects = await getProjects()
  console.log(projects)

  return (
    <main className="main-projects">
         <section className='projects-header'>
          <div>
            <h1>A Showcase of My Projects</h1>
          </div> 
        </section>
        <div className="projects-container">
          {projects.length > 0 && (
                <>
                    {projects.map(data => (
                        <div className="project-div" key={data.id}>
                        <Link href={'projects/' + data.slug}> 
                            <div className="background" style={{backgroundImage: `url(${data.image ? data.image  : Logo})`}}></div>
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