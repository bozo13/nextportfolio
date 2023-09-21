"use client"
import Style from "./style.module.scss"
import Contact from "../../components/Contact";
import PageLanding from '../../components/PageLanding';

import Globe from '../../components/Globe'

export default function Page({title, description}) {


  return (

    <main>
   
      <PageLanding  title={"JOJ"} description={"About Me"}/>
      <Globe/>
        <div className={Style.projects}>

          <div className={Style.projects.body}>
            <p>Sehr geehrte/r </p>
            <p>ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript und HTML-CSS. 
            Ich habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert.</p>

            <p>Ich habe eine Leidenschaft für kreative und ansprechende Designs, die nicht nur visuell </p>
            <p>beeindrucken, sondern auch eine klare Botschaft vermitteln. Meine Fähigkeiten im Grafikdesign umfassen Layout-Design, Typografie, Farbpalette und Bildbearbeitung. Darüber hinaus habe ich umfassende Kenntnisse in der Entwicklung von responsiven Websites und der Optimierung der Benutzererfahrung.</p>

            <p>Ich bin erfahren im Umgang mit verschiedenen Content-Management-Systemen, darunter WordPress, Shopify und Squarespace, und habe erfolgreich maßgeschneiderte Lösungen für Kunden auf der ganzen Welt entwickelt.</p>

            <p>Ich bin ein Teamplayer und arbeite gerne mit anderen Fachleuten zusammen, um kreative und innovative Lösungen zu finden. Ich bin auch in der Lage, selbstständig zu arbeiten und meine Fähigkeiten auf komplexe Projekte anzuwenden.</p>

            <p>Ich bin begeistert, meine Fähigkeiten und Erfahrungen als Grafikdesignerin und </p>
            <p>Frontend-Entwicklerin einzusetzen, um Ihre Organisation zu unterstützen. Ich bin bereit, Ihnen meine umfassenden Fähigkeiten und Erfahrungen zur Verfügung zu stellen und freue mich auf die Zusammenarbeit.</p>

            <p>Vielen Dank für Ihre Berücksichtigung meiner Bewerbung.</p>

            <p>  Mit freundlichen Grüßen,</p>
            <p>Jong Ok Jeon.</p>
        </div>
        </div>
      <Contact/>
      </main>
    )
}
 