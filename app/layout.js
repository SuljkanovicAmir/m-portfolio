import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'M',
  description: 'Mersim - Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
