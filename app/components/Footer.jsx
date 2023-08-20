import Image from "next/image";
import FB from "../../public/fb.svg";
import EmailIcon from "../../public/email.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          <Link href="https://www.facebook.com/mersim.suljkanovic.73" target='_blank'>
          <Image
            src={FB}
            unoptimized
            className="social-img"
            alt="arrow"
            width={100}
            height={100}
          />
          </Link>
          
          <Image
            src={EmailIcon}
            unoptimized
            className="social-img"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
}
