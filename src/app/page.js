'use client';
import styles from './page.module.scss'
import { useEffect} from 'react'
import Globe from '@/components/Globe'
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import Description from '@/components/Description';
import SlidingImages from '@/components/SlidingImages';
import Contact from '@/components/Contact';


export default function Home(  ) {




  return (
    <main className={styles.main}>
 
   
        <Landing />   
        <Globe /> 
        <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}



