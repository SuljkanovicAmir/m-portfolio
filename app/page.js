import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.png'
import PreviewdProjects from './components/PreviewdProjects'


export default function Home() {
  return (
    <>
    <main className='main'>
        <section className='section'>
          <div>
            <h1>Modern, environmentally conscious homes.</h1>
          </div> 
        </section>
        <section className='section2'>
            <div></div>
        </section>
        <section className='section3'>
            <div className='section3-div'>
              <Image src={Logo}className='section-arrow' alt='arrow' width={100} height={100}/>
              <h1>Projects</h1>
              <Link href="/projects">
                View all
              </Link>
            </div>
            <PreviewdProjects />
        </section>
    </main>
</>
  )
}

