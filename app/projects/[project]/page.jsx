import { getProject } from "@/sanity/sanity-utils";
import Logo from '../../../public/logo_bg.svg'
import Link from "next/link";

export default async function Project ({ params }) {

    const slug = params.project;
    const project = await getProject(slug)

    if (!project) {
        console.log("Project not found");
        return <div>Project not found</div>;
      }
    
      return (
        <main className="main-project">
          <section className='project-header'>
            <div>
              <h1>{project.name}</h1>
              <div className='section-hover'>
                <Link href="/projects">
                  Projects
                </Link>
                <span></span>
              </div>     
            </div> 
          </section>
          <section className="project-image">
            <div  style={{backgroundImage: `url(${project.image ? project.image  : Logo})`}}></div>
          </section>  
        </main >
      );
}