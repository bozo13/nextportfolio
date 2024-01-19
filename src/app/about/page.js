'use client'
import Style from './page.module.scss'

import PageLanding from '@/components/PageLanding';
import Footer from '@/components/Footer';
import { usePathname } from "next/navigation";
import { Container } from '@/components/Container';
import { MaskText } from '@/components/MaskedText';
import { MaskList } from '@/components/MaskedList';
import Quote from "@/components/quote";
import BackToTopButton from "@/components/BacktoTop"

const phrases = [
    "Mein Name ist Jong-ok Jeon und Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler. mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. ",
    "habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert. Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns. helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.",
    "Von 2014 bis 2017 leitete ich ein kleines Designstudio. Diese Erfahrung hat meine Vision und meine Einblicke in meine Arbeit erheblich erweitert, ",
    "und mein Verständnis für den gesamten Arbeitsprozess ist gewachsen. ",
]

const phrases2  = [
    "Es kann vorhersagen, wie das, was ich tue, den Endverbraucher erreichen wird. Und je mehr ich es entwarf, desto stärker war es mit dem Bauhaus verbunden. ",
    "UX ist auch mit dem Bauhaus oder dem modernistischen Design verbunden und ich war überzeugt, dass ihre Forschung noch genutzt werden kann. Deshalb habe ich mich nach Deutschland gesehnt und bin so weit gekommen. Nachdem ich im Juli 2016 geheiratet hatte, ",
    "kam ich im April 2017 endlich nach Deutschland.\n \n",
    "In Deutschland habe ich zwei Ziele.",
    "Die erste besteht darin, sich durch Deutsch vollständig in die deutsche Gesellschaft zu integrieren. Zweitens werde ich mich durch viel Erfahrung in Deutschland weiterentwickeln.",
    "Diese Unterstützung für Ihr Unternehmen ist ein Schritt weiter zu meinem Ziel.",
]

const carrierData =[
  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  },  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  },  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  }
]


const abschlusseData =[
  { 
    name: "ROK Armee",
    position : 'Hauptgefreite \n aus dem Militärdienst entlassen werden',
    period :  " 09/2003 - 09/2005 \n "

  },
  { 
    name: " Universität Hoseo",
    position : "Verlassen der Universität \n Wirtschaft und der internationale Handel",
    period :  "2009 - 2010 \n "

  },
  {
    name: " Chung Am High School ",
    position : "Abschließen",
    period :  "2012 - 2014  \n Seoul, Korea"
  }
]


export default function Page() {
    const pathname = usePathname()
    const shortText =  [ "Ich bin eine talentierte und erfahrene Grafikdesigner und ",
                         "Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen ",
                         "sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS.",
                         "habe meine Fähigkeiten autodidaktisch erworben und ",
                         "\n",
                         "durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert."
                      ]

  return (
    <>
      <PageLanding title={pathname}  description={shortText}  link={pathname} />

      <Container className={Style.container} >
        
          <div className={Style.about} >
          <div className='spacer-xs'/>
            <div className={Style.karrierTitle }  data-scroll data-scroll-speed={0.1}>
         
              <h1 >Greeting  </h1>
              <Quote />
            </div>
          </div>

          <div className={Style.greeting}>
          <div className='spacer-xs'/>
            <div className={Style.maskedtextcontainer}>
              <MaskText  maskedtext ={phrases}  />
            </div>
            <div className={ Style.maskedtextcontainer }>
              <MaskText  maskedtext ={phrases2} />
            </div>
          </div>
           
      </Container>

      <Container className={Style.container} >
          <div className={Style.about} >
          <div className='spacer-xs'/>
            <div className={Style.karrierTitle  } data-scroll data-scroll-speed={0.1}>
                <h1 >KARRIERE</h1>
                <Quote />
              </div>
          </div>
           
            <div className={Style.greeting}>
                
                <div className='spacer-xs'/>
                  <MaskList maskedlist={carrierData} />
                <div className='spacer-xs'/>
            </div>

      </Container>

      <Container className={Style.container} >
          <div className={Style.about} >
          <div className='spacer-xs'/>
            <div className={Style.karrierTitle  } data-scroll data-scroll-speed={0.1}>
                <h1 >Abschlüsse  </h1>
                <Quote />
              </div>
          </div>
           
            <div className={Style.greeting}>
                
                <div className='spacer-xs'/>
                  <MaskList maskedlist={abschlusseData} />
                <div className='spacer-xs'/>
            </div>

      </Container>

      <Container className={Style.container} >
          <div className={Style.about} >
          <div className='spacer-xs'/>
            <div className={Style.karrierTitle } data-scroll data-scroll-speed={0.1}>
            <h1 > FÄHIGKEITEN</h1> 
                <Quote />
              </div>
          </div>
            <div className={Style.faehigkeiten}>
           
              <div className={Style.faehigkeitenBox}> 
                <h1 >
                  01
                </h1>
                <h3>  Adobe Creative Suite<br/>Illustrator / Photoshop / Indesign</h3>
                <p> Grafik Programm </p>
              </div>
              <div className={Style.faehigkeitenBox}> 
                <h1 >
                  02
                </h1>
                <h3> HTML / CSS / Javascript Frameworks <br/>
                    ReactJS (including GatsbyJS, NextJS) </h3>
                <p> web development</p>
              </div>
              <div className={Style.faehigkeitenBox}> 
                <h1 >
                  03
                </h1>
                <h3> adobe XD / Figma <br/> <br/> </h3>
                <p> as a prototyping tool</p>
              </div>
            </div>
            

      </Container>

      <Container className={Style.container} >
          <div className={Style.about} >
          <div className='spacer-xs'/>
            <div className={Style.karrierTitle } data-scroll data-scroll-speed={0.1}>
                <h1 > sprache </h1>
                <Quote />
              </div>
          </div>
           
            <div className={Style.greeting}>
            <div className='spacer-xs'/>
             <div className={Style.language}>
           
                <div className={Style.languageBox}>
                  <h3 className={Style.languageelement}>Koreanische</h3>
                  <p>Muttersprache</p> 
                </div>

                <div className={Style.languageBox}>
                  <h3 className={Style.languageelement}>Deutsch</h3>
                  <p>Mittelstufe B2</p> 
                </div>
               
              </div>
               
            
            </div>
     
     
      </Container>
      <Container className={Style.container} >
        <div className='spacer'/>
        <BackToTopButton />
      </Container>

      <Footer/>
    </>
  )
}
