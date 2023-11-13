"use client"
import Style from "./style.module.scss"
import Contact from "@/components/Contact";
import PageLanding from '@/components/PageLanding';
import Quote from "@/components/quote";
import Globe from '@/components/Globe'
import ShuffleText from '@/components/ShuffleText '

import { usePathname } from "next/navigation";
import { slideUp, staggerCildren } from './animation';
import { motion } from 'framer-motion';



export default function Page({title, description}) {
  const pathname = usePathname()
  console.log(pathname);


  return (

    <main data-scroll-container >
        <ShuffleText />
        <Globe />
        <div className={Style.about}>
        <PageLanding title={pathname}  description={"what you want?"} />

            <motion.div variants={slideUp} className={Style.quotewidth}>
               <Quote />
            </motion.div>
           
           
            <div className={Style.greeting} >
           <motion.div   variants={staggerCildren}
                  initial="hidden"
                  animate="show"
              >
                <motion.p variants={slideUp} >Sehr geehrte/r<br/>
                ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. <br/>
                Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.
                </motion.p>

                <motion.p variants={slideUp}  >Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell<br/>
              beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.
              <br/>
              Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.
            </motion.p>

            <motion.p variants={slideUp}  >Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und <br/>
                Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</motion.p>

                <motion.p variants={slideUp}  >Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</motion.p>

                 <motion.p variants={slideUp}  > Mit freundlichen Grüßen,<br/>
                Jong Ok Jeon.</motion.p>

                <motion.p variants={slideUp} >Sehr geehrte/r<br/>
                ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. <br/>
                Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.
                </motion.p>

                <motion.p variants={slideUp}  >Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell<br/>
              beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.
              <br/>
              Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.
            </motion.p>

            <motion.p variants={slideUp}  >Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und <br/>
                Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</motion.p>

                <motion.p variants={slideUp}  >Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</motion.p>

                 <motion.p variants={slideUp}  > Mit freundlichen Grüßen,<br/>
                Jong Ok Jeon.</motion.p>
                <motion.p variants={slideUp} >Sehr geehrte/r<br/>
                ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. <br/>
                Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.
                </motion.p>

                <motion.p variants={slideUp}  >Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell<br/>
              beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.
              <br/>
              Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.
            </motion.p>

            <motion.p variants={slideUp}  >Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und <br/>
                Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</motion.p>

                <motion.p variants={slideUp}  >Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</motion.p>

                 <motion.p variants={slideUp}  > Mit freundlichen Grüßen,<br/>
                Jong Ok Jeon.</motion.p>
                variants     <motion.p variants={slideUp} >Sehr geehrte/r<br/>
                ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. <br/>
                Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.
                </motion.p>

                <motion.p variants={slideUp}  >Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell<br/>
              beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.
              <br/>
              Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.
            </motion.p>

            <motion.p variants={slideUp}  >Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und <br/>
                Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</motion.p>

                <motion.p variants={slideUp}  >Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</motion.p>

                 <motion.p variants={slideUp}  > Mit freundlichen Grüßen,<br/>
                Jong Ok Jeon.</motion.p>
                <motion.p variants={slideUp} >Sehr geehrte/r<br/>
                ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. <br/>
                Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.
                </motion.p>

                <motion.p variants={slideUp}  >Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell<br/>
              beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.
              <br/>
              Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.
            </motion.p>

            <motion.p variants={slideUp}  >Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und <br/>
                Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</motion.p>

                <motion.p variants={slideUp}  >Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</motion.p>

                 <motion.p variants={slideUp}  > Mit freundlichen Grüßen,<br/>
                Jong Ok Jeon.</motion.p>

            </motion.div>
              </div>
          </div>

      </main>
    )
}
 