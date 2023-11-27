"use client"
import Globe from '@/components/Globe'
import ShuffleText from "@/components/ShuffleText "
import PixelatedImage from '@/components/Pixelated'
import { usePathname } from 'next/navigation'
import PageLanding from '@/components/PageLanding'
import Style from './style.module.scss'
import { useRef } from 'react'
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

export default function Page(  ) {

  const pathname = usePathname()
  const titlelink = "/contact"

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
        <Globe />
        <div className={Style.container}>
          {
            [...Array(7).keys()].map( (_, index) => {
              return <PixelatedImage src={`/images/pixelated/${index}.png`} src10={`/images/pixelated/${index}_small.png`}/>
            })
          }
        </div>
        <h1>title is here </h1>
        <ShuffleText shuffletext={pathname} link = {"/"} ></ShuffleText>
        <h1>title is here </h1>
        <h1>title is here </h1>
        <h1>title is here </h1>

        </main>
      )
  }
   