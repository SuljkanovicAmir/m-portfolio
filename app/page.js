import Image from 'next/image'
import Link from 'next/link'
import PreviewedProjects from './components/PreviewedProjects'
import Arrow from '../public/arrow.svg'

export default function Home() {
  return (
    <>
    <main className='main'>
        <section className='section'>
          <div>
            <h1>Transforming vision into breathtaking reality.</h1>
            <div className='section-hover'>
              <Link href="/projects">
                Projects
              </Link>
              <span></span>
            </div>     
          </div> 
        </section>
        <section className='section2'>
            <div></div>
        </section>
        <section className='section3'>
            <div className='section3-div'>
              <Image src={Arrow}className='section-arrow' alt='arrow' unoptimized width={100} height={100}/>
              <h1>Projects</h1>
              <div className='section-hover'>
                <Link href="/projects">
                  View all
                </Link>
                <span></span>
              </div>
            </div>
            <PreviewedProjects />
        </section>
    </main>
</>
  )
}

