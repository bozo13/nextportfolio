"use client"


import { useEffect, useRef, useState } from 'react'
import styles from './page.module.scss'

import { useTransform, useScroll, motion } from 'framer-motion'
import { usePathname } from "next/navigation"
import ShuffleText from "@/components/ShuffleText "
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import PageLanding from "@/components/PageLanding"
import Footer from '@/components/Footer'
import { PageWrapper } from '@/components/PageWrapper'
import { Container } from '@/components/Container'
//import { useStyleMediaQuery } from '@/lib/useStyleMediaQuery'


const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]


export default function Page( {title, description ,text}) {

  const pathname = usePathname()

  
  //const { matches: isMobile } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 767 });
  //const { matches: imSmall } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 400 });

  const shorttext = [
    " all i worked that \n",
    "designs and develops unique brand identities \n",
    " and tailor-made digital solutions"
  ]

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
   <>
     

      <PageLanding title ={pathname} description={shorttext} link={pathname}/>
      <Container>
 
      
      <div className={styles.section} data-scroll-section>
        <div  data-scroll        
              data-scroll-direction="horizontal"
              data-scroll-speed="3">
          <h1 > big</h1>
          <h1 > big</h1>
          <h1 > big</h1>
        </div>
      </div>
      <div className={styles.spacer}>      
        <h1 > big</h1>
        <h1 > big</h1>
        <h1 > big</h1>
        <h1 > big</h1>
      </div>
      <div ref={gallery} className={styles.gallery}>

        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
     
        
      </div>
      <div className= "spacer" />

      </Container>
    <Footer />

    </>
    
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/column/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }

    </motion.div>
  )
}