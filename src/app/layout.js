import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header';


//const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: './fonts/KHInterferenceTRIAL-Light.woff2' })

export const metadata = {
  title: 'Jong ok Jeon',
  description: 'Sammelungen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
      <Header />
        {children}
 
      </body>
    </html>
  )
}

/*
     <Header />
*/