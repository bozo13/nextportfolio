'use client'
import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Preloader from "../components/Preloader";
import { AnimatePresence } from 'framer-motion';

//const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: './fonts/KHInterferenceTRIAL-Light.woff2' })



export default function RootLayout({ children }) {

  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect (() => {
    if(isLoading)return
  },[isLoading])


  useEffect( () => {
    ( 
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

         setTimeout( () => {
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 300)
         
      }
    )()
  }, [])

  return (
    <html lang="en">
      <body className={myFont.className}> 

      <AnimatePresence 
        mode='wait'
      >     
      {isLoading && isHome  && (
        <Preloader  finishLoading={()=>setIsLoading(false)} />)}
      </AnimatePresence>
      <Header />
        {children} 

      </body>
    
    </html>
   
  )
}

/*
// Meta Data
export const metadata = {
  title: 'Jong ok Jeon',
  description: 'Sammelungen',
}

*/