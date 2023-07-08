import Link from "next/link";



export default function() {
    return (
        <main className="main-contact">
            <section> 
                <div className="contact-header">
                    <h1>We should work <br></br> together.</h1>
                </div> 
                <div className="contact-email">
                    <p>Business inquiries / Contact</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            mersim@gmail.com
                        </Link>
                        <span></span>
                    </div>   
                </div>
                <div className="contact-socials">
                    <p>Checkout my</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            Facebook
                        </Link>
                        <span></span>
                    </div>     
                </div>
                <div className="contact-socials">
                    <p>Follow me on</p>
                    <div className='contact-hover'>
                        <Link href="/projects">
                            Instagram
                        </Link>
                        <span></span>
                    </div>     
                </div>
            </section>

        </main>
    );
}