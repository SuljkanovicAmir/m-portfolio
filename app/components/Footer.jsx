import Image from "next/image";
import Logo from '../../public/logo.png'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkd.svg'
import FB from '../../public/fb.svg'



export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-div">
                    <Image src={Logo} className=' logo' alt='arrow' width={100} height={100}/>
                    Building a better future, <br></br> together.
                </div>
                <div className="footer-info-div">
                    <div className="footer-email">
                        <p>Business inquiries / Contact</p>
                        <p>hello@studio.com</p>
                    </div>
                    <div className="socials">
                        <Image src={FB} unoptimized className='social-img' alt='arrow' width={100} height={100}/>
                        <Image src={Instagram} unoptimized className='social-img ig' alt='arrow' width={100} height={100}/>
                        <Image src={Linkedin} unoptimized className='social-img' alt='arrow' width={100} height={100}/>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2023 Amir Suljkanović.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    );
}