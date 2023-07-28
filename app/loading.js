"use client"
import Image from 'next/image';
import Logo from '../public/logo.png'


export default function Loading() {
    console.log('jhi')
    return (
        <div className="loading-screen">
            <div>
                <Image className="loading-image" src={Logo} height={100} width={100} />
                <div class="shadow"></div>
            </div>
           
        </div>
    );
}