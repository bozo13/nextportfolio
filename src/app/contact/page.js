"use client"
import ShuffleText from "@/components/ShuffleText "
import PixelatedImage from '@/components/Pixelated'
import { usePathname } from 'next/navigation'
import PageLanding from '@/components/PageLanding'
import Style from './style.module.scss'
import { useRef } from 'react'
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Footer from '@/components/Footer'
import Clock from '@/components/Clock'

export default function Page(  ) {

  const pathname = usePathname()
  const titlelink = "/contact"
  const now = new Date();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
  
    return (
  
      <main style={{y}} ref={container} data-scroll-container>
 
        <PageLanding title ={pathname} description={"all i worked"} link= {titlelink}/>
        <div className={Style.width}> 
          <div className={Style.pageTitle}> 
          <Clock tiz={now.getTime()} />
            <h1>title is here </h1>
            <ShuffleText shuffletext={pathname} link = {"/"} />
            <h1>title is here </h1>
            <h1>title is here </h1>
            <h1>title is here </h1>
          </div>

          <div className={Style.pageText}>
              <p>Sorry,<br />bald will ich in here mehre Informationen schreiben.<br /> Danke für deine besuch. </p>
              </div>
        </div>
        <div className={Style.container}>
          {
            [...Array(7).keys()].map( (_, index) => {
              return (
               
                  <PixelatedImage src={`/images/pixelated/${index}.png`} src10={`/images/pixelated/${index}_small.png`}/>
            
                  )
            })
          }
 
        </div>  
     
         <Footer />
        </main>
      )
  }
   