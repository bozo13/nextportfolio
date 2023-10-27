"use client"
import PageLanding from "@/components/PageLanding"
import { usePathname } from "next/navigation"

export default function Page( {title, description}) {
  const pathname = usePathname()
  console.log(pathname);

    return (
  
      <main data-scroll-container >
        <PageLanding title ={ pathname} description={"all i worked"} />
        <div> works</div>  
        </main>
      )
  }
   