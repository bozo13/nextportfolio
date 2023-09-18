import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>


            <div className={styles.body}>
            <div className={styles.quote}>
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21.09 12.92" >
                <path d="M10.54,6.36c0-0.67,0.52-1.19,1.19-1.19h2.89c0.67,0,1.19-0.52,1.19-1.19V1.19C15.81,0.52,16.33,0,17,0h2.9
                    c0.67,0,1.19,0.52,1.19,1.19v2.79c0,0.67-0.52,1.19-1.19,1.19H17c-0.67,0-1.19,0.52-1.19,1.19v5.38c0,0.67-0.52,1.19-1.19,1.19
                    h-2.89c-0.67,0-1.19-0.52-1.19-1.19V6.36z M9.35,5.17H6.46c-0.67,0-1.19,0.52-1.19,1.19v5.38c0,0.67-0.52,1.19-1.19,1.19h-2.9
                    C0.52,12.92,0,12.4,0,11.73V6.36c0-0.67,0.52-1.19,1.19-1.19h2.9c0.67,0,1.19-0.52,1.19-1.19V1.19C5.27,0.52,5.79,0,6.46,0h2.89
                    c0.67,0,1.19,0.52,1.19,1.19v2.79C10.54,4.65,10.03,5.17,9.35,5.17"/>
                </svg>
            </div>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
            <div className={styles.quote}>
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21.09 12.92" >
                <path d="M10.54,6.36c0-0.67,0.52-1.19,1.19-1.19h2.89c0.67,0,1.19-0.52,1.19-1.19V1.19C15.81,0.52,16.33,0,17,0h2.9
                    c0.67,0,1.19,0.52,1.19,1.19v2.79c0,0.67-0.52,1.19-1.19,1.19H17c-0.67,0-1.19,0.52-1.19,1.19v5.38c0,0.67-0.52,1.19-1.19,1.19
                    h-2.89c-0.67,0-1.19-0.52-1.19-1.19V6.36z M9.35,5.17H6.46c-0.67,0-1.19,0.52-1.19,1.19v5.38c0,0.67-0.52,1.19-1.19,1.19h-2.9
                    C0.52,12.92,0,12.4,0,11.73V6.36c0-0.67,0.52-1.19,1.19-1.19h2.9c0.67,0,1.19-0.52,1.19-1.19V1.19C5.27,0.52,5.79,0,6.46,0h2.89
                    c0.67,0,1.19,0.52,1.19,1.19v2.79C10.54,4.65,10.03,5.17,9.35,5.17"/>
                </svg>
            </div>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}


/*

Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. 
habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert.

Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns.
helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.

*/
