import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Logo from '../../public/logo_bg.svg'




export default async function PreviewdProjects() {

    const projects = await getProjects()

    return (
        <div className="projects">
            {projects.length > 0 && (
                <>
                    {projects.map(data => (
                        <div className="preview-project-div" key={data.id}>
                        <Link href={'projects/' + data.slug}> 
                            <div className="background" style={{backgroundImage: `url(${data.image ? data.image  : Logo})`}}></div>
                            <p>{data.name}</p>
                        </Link>
                    </div>
                    ))}
                </>
            )}
        </div>
    );
}