import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getProjects () {
  try {
    const result = await  createClient(clientConfig).fetch(
        groq`*[_type == "project"] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            url,
            "images": images[].asset->url
        }`,
        { next: { revalidate: 6000 } }
      )     
      return result;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error; // Rethrow the error to be handled by the caller
    }

}

export async function getProject(slug) {
    try {
        const result = await createClient(clientConfig).fetch(
          groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            url,
            "images": images[].asset->url
          }`,
          { slug },
          { next: { revalidate: 6000 } }
        );
    
        return result;
      } catch (error) {
        console.error('Error fetching project:', error);
        throw error; // Rethrow the error to be handled by the caller
      }

}