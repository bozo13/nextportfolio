"use client"
import Clock from '@/components/Clock'
import { Container } from "@/components/Container"
import Footer from '@/components/Footer'
import PageLanding from '@/components/PageLanding'
import PixelatedImage from '@/components/Pixelated'
import ShuffleText from "@/components/ShuffleText "
import { useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import Style from './style.module.scss'
import Link from 'next/link'
import Quote from '@/components/quote'


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
  const description =  ['For any enquiries, ',
                        '\n',
                        'or just to say hello',
                        '\n',
                        'get in touch and contact us.']

    return (


      <main style={{y}} ref={container} data-scroll-container>
          <div className={Style.spacer}/>
          <Container className={Style.container}>

            <div className={Style.contact} >

                <div className={Style.contactTitle }  data-scroll data-scroll-speed={0.2}>
                    <h1 >Contact</h1>
                    <Quote />
                </div>
              <div className={Style.Clock} data-scroll data-scroll-speed={0.6} data-scroll-direction="right">
                <Clock timeNow={now.getTime()} />
              </div>
            </div>

            <div className={Style.Content}>
    
              <div className={Style.pageText}>
              <h2> For any enquiries<br/>
                  or just to say hello<br/>
                  get in touch and contact me.</h2>
              </div>
              <div className={Style.ContactDetails}>
                <h1>Contact Details</h1>
                <Link href= '/'>jeon.deutschland@gmail.com</Link>
                <Link href= "/">+49 152 2341 0949</Link>
              </div>
         
            </div>
            <div className={Style.absolutePhoto} data-scroll data-scroll-speed={1}>
              <PixelatedImage src={`/images/pixelated/5.png`} src10={`/images/pixelated/5_small.png`}/>
            </div>
          </Container>
          <Footer />
        </main>


      )
  }

  /*

        <div className={Style.container}>
          {
            [...Array(7).keys()].map( (_, index) => {
              return (
               
                  <PixelatedImage src={`/images/pixelated/${index}.png`} src10={`/images/pixelated/${index}_small.png`}/>
            
                  )
            })
          }
 
        </div>  
"mailto:jeon.deutschland@gmail.com"
        */