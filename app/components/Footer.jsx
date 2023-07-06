import Image from "next/image";
import Logo from '../../public/logo.png'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkd.svg'



export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-div">
                    <Image src={Logo} className=' logo' alt='arrow' width={100} height={100}/>
                    We should work <br></br> together.
                </div>
                <div>
                    <div>
                        <p>Contact</p>
                        <p>hello@studio.com</p>
                    </div>
                    <div className="socials">
                        Social Media:
                        <Image src={Instagram} className=' logo' alt='arrow' width={500} height={500}/>
                        <Image src={Linkedin} className=' logo' alt='arrow' width={100} height={100}/>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
}