import { createClient, groq } from "next-sanity";


export async function getProjects () {
    const client = createClient({
        projectId: '1wihf8wm',
        dataset: 'production',
        apiVersion: '2023-06-06'

    })

    return client.fetch(
        groq`*[_type == "project"] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
        }`
    )

}

export async function getProject(slug) {
    const client = createClient({
        projectId: '1wihf8wm',
        dataset: 'production',
        apiVersion: '2023-06-06'
    })
    try {
        const result = await client.fetch(
          groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url
          }`,
          { slug }
        );
    
        return result;
      } catch (error) {
        console.error('Error fetching project:', error);
        throw error; // Rethrow the error to be handled by the caller
      }

}