'use client'
import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header';
import { usePathname , useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Preloader from "../components/Preloader";
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { useStore } from '@/lib/store'
import { useFrame } from '@studio-freight/hamo'

//const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: './fonts/KHInterferenceTRIAL-Light.woff2' })



export default function RootLayout({ children }) {

  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome);

  const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    const lenis = new Lenis({
      // gestureOrientation: 'both',
      smoothWheel: true,
      // smoothTouch: true,
      syncTouch: true,
    })
    window.lenis = lenis
    setLenis(lenis)

    // new ScrollSnap(lenis, { type: 'proximity' })

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  const [hash, setHash] = useState()

  useEffect(() => {
    if (lenis && hash) {
      // scroll to on hash change
      const target = document.querySelector(hash)
      lenis.scrollTo(target, { offset: 0 })
    }
  }, [lenis, hash])

 // update scroll position on page refresh based on hash
/*
  useEffect(() => {
   
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#').pop()
      setHash('#' + hash)
    }
  }, [router])
*/

 // catch anchor links clicks
 /*
  useEffect(() => {
   
    function onClick(e) {
      e.preventDefault()
      const node = e.currentTarget
      const hash = node.href.split('#').pop()
      setHash('#' + hash)
      setTimeout(() => {
        window.location.hash = hash
      }, 0)
    }

    const internalLinks = [...document.querySelectorAll('[href]')].filter(
      (node) => node.href.includes(router.pathname + '#')
    )

    internalLinks.forEach((node) => {
      node.addEventListener('click', onClick, false)
    })

    return () => {
      internalLinks.forEach((node) => {
        node.removeEventListener('click', onClick, false)
      })
    }
  }, [])
*/
  useFrame((time) => {
    lenis?.raf(time)
  }, 0)
  /*
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
*/
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