"use client"
import Style from "./style.module.scss"
import Contact from "@/components/Contact";
import PageLanding from '@/components/PageLanding';
import Quote from "@/components/quote";
import Footer from '@/components/Footer';
import Parser from 'html-react-parser';
import { usePathname } from "next/navigation";
import { useInView, motion } from 'framer-motion';
import { slideUp, staggerCildren, slideUpText, opacity } from './animation';
import { useRef } from "react";



export default function Page() {
  const pathname = usePathname()
  const greeting = useRef(null);
  const isInView = useInView(greeting)

  const shortText =  "Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert." 
  const phrase1 = "Sehr geehrte Damen und Herren,";
  const phrase2 = "Mein Name ist Jong-ok Jeon und Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert. Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns. helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand."
  const phrase3 = 'Von 2014 bis 2017 leitete ich ein kleines Designstudio.</br> Diese Erfahrung hat meine Vision und meine Einblicke in meine Arbeit erheblich erweitert, und mein Verständnis für den gesamten Arbeitsprozess ist gewachsen. Es kann vorhersagen, wie das, was ich tue, den Endverbraucher erreichen wird. Und je mehr ich es entwarf, desto stärker war es mit dem Bauhaus verbunden. UX ist auch mit dem Bauhaus oder dem modernistischen Design verbunden und ich war überzeugt, dass ihre Forschung noch genutzt werden kann. Deshalb habe ich mich nach Deutschland gesehnt und bin so weit gekommen. Nachdem ich im Juli 2016 geheiratet hatte, kam ich im April 2017 endlich nach Deutschland.'
  const reactElements =  Parser(phrase3);
  return (

   
      <>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />
      
        <div className={Style.about}>
      
            <div className={Style.quotewidth } data-scroll data-scroll-speed={-0.1}>
               <Quote />
            </div>

            <div className={Style.greeting} ref={greeting}>
                <p>
                        {
                            reactElements.split('</br>').map( (word, index) => {
                                return <span key={index} className={ Style.mask }>
                                            <motion.span 
                                              variants={slideUpText } 
                                              custom={index} 
                                              animate={isInView ? "open" : "closed"} 
                                              key={index}>
                                                {word}
                                              </motion.span>
                                        </span>
                            })  
                        }
                  </p>
                
                  <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        {phrase2}
                  </motion.p>
                  <motion.p variants={slideUp} animate={isInView ? "open" : "closed"} dangerouslySetInnerHTML={{ __html: phrase3 }}></motion.p>
              </div>
        </div>
        <Footer/>
      </>
    )
}
 