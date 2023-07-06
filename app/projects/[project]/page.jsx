import { getProject } from "@/sanity/sanity-utils";
import Logo from '../../../public/logo_bg.svg'

export default async function Project ({ params }) {

    const slug = params.project;
    const project = await getProject(slug)

    if (!project) {
        console.log("Project not found");
        return <div>Project not found</div>;
      }
    
      console.log(project);
      return (
        <main className="main-projects">
          {project.name}
          <div className="background" style={{backgroundImage: `url(${project.image ? project.image  : Logo})`}}></div>
        </main >
      );
}