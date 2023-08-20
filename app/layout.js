import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import Loading from './loading'
import { Suspense } from 'react'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export const metadata = {
  title: 'Mersim Suljkanovic',
  description: 'Mersim - Portfolio Website',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Mersim Suljkanovic - Portfolio" />
        <meta property="og:description" content="Mersim Suljkanovic - Portfolio Website" />
        <meta name="author" content="Amir Suljkanovic" />
        <meta property="og:type" content="Website" />
        <meta property="og:image" content="https://i.imgur.com/hVQBiQI.png" />
        <meta name="google-site-verification" content="Ii2w0-XK6MOqoHCar_Vi-JK83Q8Lz0ssTdObBueUQI8" />
      </head>
      <body className={poppins.className}>
        <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
