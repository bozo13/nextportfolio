"use client"
import Style from "./style.module.scss"
import Image from "next/image";
import Contact from "@/components/Contact";
import PageLanding from '@/components/PageLanding';
import Quote from "@/components/quote";
import Footer from '@/components/Footer';
import Parser from 'html-react-parser';
import { usePathname } from "next/navigation";
import { useInView, motion, easeInOut,  } from 'framer-motion';
import { slideUp, staggerCildren, slideUpText, opacity } from './animation';
import { useRef } from "react";
import { KHInterferenceTRIAL, KHTekaTRIALLight } from '@/lib/fonts';
import Stripe from '../../../public/stripe-box.svg'
import Smile from '../../../public/smile.svg'
import JJ from '../../../public/JJ.svg'
import JJSmall from '../../../public/JJ-small.svg'
import Seoul from '../../../public/seoul.svg'
import { PageWrapper } from "@/components/PageWrapper";
import { Container } from "@/components/Container";


export default function Page() {
  const pathname = usePathname()
  const greeting = useRef(null);
  const greeting2 = useRef(null);
  const greeting3 = useRef(null);
  const greeting4 = useRef(null);
  const greeting5 = useRef(null);
  const isInView = useInView(greeting)
  const isInView2 = useInView(greeting2)
  const isInView3 = useInView(greeting3)
  const isInView4 = useInView(greeting4)
  const isInView5 = useInView(greeting5)
  
  const container = {
    hidden: { opacity: 0 ,
            },
    show: {
      opacity: 1,
     
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      }
    }
  }
  const itemA = {
    hidden: { opacity:0,  translateY: "30px" },
    show: {   opacity:1, translateY: "0px",
    transition:{
      staggerChildren: 0.25,
      delayChildren: 0.1,
      ease: easeInOut
    }
  },
}

  const itemB = {
    hidden: {   translateX: "200px" },
    show: {  translateX: "0px" },
  }

  const shortText =  "Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert." 
  const phrase1 = "Sehr geehrte Damen und Herren,";
  const phrase2 = ""
  const phrase3 = `Mein Name ist Jong-ok Jeon und Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler 
                  </br> mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. 
                  </br> habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert. 
                  </br> Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns. 
                  </br> helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.
                  </br>
                  </br>
                  </br> Von 2014 bis 2017 leitete ich ein kleines Designstudio.
                  </br> Diese Erfahrung hat meine Vision und meine Einblicke in meine Arbeit erheblich erweitert, 
                  </br> und mein Verständnis für den gesamten Arbeitsprozess ist gewachsen. 
                  </br> Es kann vorhersagen, wie das, was ich tue, den Endverbraucher erreichen wird. 
                  </br> Und je mehr ich es entwarf, desto stärker war es mit dem Bauhaus verbunden. 
                  </br> UX ist auch mit dem Bauhaus oder dem modernistischen Design verbunden und ich war überzeugt, dass ihre Forschung noch genutzt werden kann. 
                  </br> Deshalb habe ich mich nach Deutschland gesehnt und bin so weit gekommen. Nachdem ich im Juli 2016 geheiratet hatte, 
                  </br> kam ich im April 2017 endlich nach Deutschland.
                  </br> 
                  </br> In Deutschland habe ich zwei Ziele.
                  </br> Die erste besteht darin, sich durch Deutsch vollständig in die deutsche Gesellschaft zu integrieren. Zweitens werde ich mich durch viel Erfahrung in Deutschland weiterentwickeln.
                  </br> Diese Unterstützung für Ihr Unternehmen ist ein Schritt weiter zu meinem Ziel.`



  const reactElements =  Parser(phrase3);
  return (

   
      <>
       <PageWrapper>
        <Container>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />
        
        <div className={Style.about}>
      
            <div className={Style.quotewidth } data-scroll data-scroll-speed={0.1}>
              <h1 >Greeting </h1>
               <Quote />
            </div>

            <div className={Style.greeting} ref={greeting}>
                <p className={KHTekaTRIALLight.className}>
                        {
                            phrase1.split(" ").map( (word, index) => {
                                return <span key={index} className={ `Style.mask KHTekaTRIALLight.className` }>
                                            <motion.span 
                                              variants={slideUp } 
                                              custom={index} 
                                              animate={isInView ? "show" : "hidden"} 
                                              key={index}>
                                                {word}
                                              </motion.span>
                                        </span>
                            })  
                        }
                  </p>
                
                  <motion.p 
                    className={ "KHTekaTRIALLight.className"} 
                    variants={slideUp} 
                    animate={isInView ? "show" : "hidden"} 
                    dangerouslySetInnerHTML={{ __html: phrase3 }}>
                  </motion.p>
              </div>
              {/**
              <div className={Style.biga } data-scroll data-scroll-speed={-0.3}> ABOUT </div>
               */}
        </div>

        <div className={Style.Smile} data-scroll data-scroll-speed={-0.2}>
                <Image 
                 priority
                 src={Smile}
                 alt="double smile"/>
              </div>
     

        <div className={Style.about} >
          <div className={Style.karrierTitle }  data-scroll data-scroll-speed={0.1}>
          <h1 >KARRIERE </h1>
          </div>

          <motion.div className={Style.karrier} ref={greeting2} >
            <motion.ul variants= {container} 
                  animate={isInView2 ? "show" : "hidden"}  
                  initial="hidden"
              
                >  
              <motion.li    variants={itemA} > 
                <p> Cadman, Düsseldorf<br /> 08/2019 - 11/2020</p>
                <p>als Entwickler</p>
              </motion.li>
              <motion.li    variants={itemA}>
                <p> Cadman, Düsseldorf<br /> 08/2019 - 11/2020</p>
                <p>als Entwickler</p>
              </motion.li>
              <motion.li    variants={itemA}>
                <p> Cadman, Düsseldorf<br /> 08/2019 - 11/2020</p>
                <p>als Entwickler</p>
              </motion.li>
              <motion.li    variants={itemA}>
                <p> Cadman, Düsseldorf<br /> 08/2019 - 11/2020</p>
                <p>als Entwickler</p>
              </motion.li>
              <motion.li    variants={itemA}>
                <p> Cadman, Düsseldorf<br /> 08/2019 - 11/2020</p>
                <p>als Entwickler</p>
              </motion.li>
            </motion.ul>
            
          </motion.div>
        </div>      
              <div className={Style.Stripes} data-scroll data-scroll-speed={0.4}>
                <Image 
                 priority
                 src={Stripe}
                 alt="stripe"/>
              </div>
     
        <motion.div className={Style.about} >
          <div className={Style.karrierTitle } data-scroll data-scroll-speed={0.2}>
            <h1 > AbsChLüssE </h1>
          </div>

          <motion.div className={Style.karrier} ref={greeting3} >
            <motion.ul variants= {container} 
                  animate={isInView3 ? "show" : "hidden"}  
                  initial="hidden"
              >
              <motion.li variants={itemA}>
                <p>ROK Armee<br /> 09/2003 - 09/2005</p>
                <p>Hauptgefreite<br />
                    aus dem Militärdienst entlassen werden</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Universität Hoseo <br />02/2001 - 01/2002</p>
                <p>Verlassen der Universität<br />
                    Wirtschaft und der internationale Handel</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Chung Am High School <br />02/2000</p>
                <p>Abschließen</p>
              </motion.li>
            </motion.ul>
            </motion.div>
     

        </motion.div>              
       
        <div className={Style.JJ} data-scroll data-scroll-speed={0.1}>
                <Image 
                 priority
                 src={JJ}
                 alt="JJ"/>
              </div>


              <motion.div className={Style.about} >
          <div className={Style.karrierTitle } data-scroll data-scroll-speed={0.2}>
            <h1 >  sprachen</h1> 
          </div>

          <motion.div className={Style.karrier} ref={greeting4} >
            <motion.ul variants= {container} 
                  animate={isInView4 ? "show" : "hidden"}  
                  initial="hidden"
              >
              <motion.li variants={itemA}>
                <p>ROK Armee<br /> 09/2003 - 09/2005</p>
                <p>Hauptgefreite<br />
                    aus dem Militärdienst entlassen werden</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Universität Hoseo <br />02/2001 - 01/2002</p>
                <p>Verlassen der Universität<br />
                    Wirtschaft und der internationale Handel</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Chung Am High School <br />02/2000</p>
                <p>Abschließen</p>
              </motion.li>
            </motion.ul>
            </motion.div>
            </motion.div>

            <motion.div className={Style.about} >
          <div className={Style.karrierTitle } data-scroll data-scroll-speed={0.2}>
            <h1 > FÄHIGKEITEN</h1> 
          </div>
 
          <motion.div className={Style.karrier} ref={greeting5} >
            <motion.ul variants= {container} 
                  animate={isInView5 ? "show" : "hidden"}  
                  initial="hidden"
              >
              <motion.li variants={itemA}>
                <p>ROK Armee<br /> 09/2003 - 09/2005</p>
                <p>Hauptgefreite<br />
                    aus dem Militärdienst entlassen werden</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Universität Hoseo <br />02/2001 - 01/2002</p>
                <p>Verlassen der Universität<br />
                    Wirtschaft und der internationale Handel</p>
              </motion.li>
              <motion.li variants={itemA}>
                <p>Chung Am High School <br />02/2000</p>
                <p>Abschließen</p>
              </motion.li>
            </motion.ul>
            </motion.div>
            </motion.div>


            <div className={Style.Stripes} data-scroll data-scroll-speed={0.8}>
                <Image 
                 priority
                 src={Seoul}
                 alt="seoul"/>
              </div>
              <div className={Style.Stripes} data-scroll data-scroll-speed={-0.1}>
                <Image 
                 priority
                 src={JJSmall}
                 alt="small letter JJ"/>
              </div>
        <Footer/>
        </Container>
        </PageWrapper>
      </>
    )
}
 