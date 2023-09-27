import { circIn } from "framer-motion"

export const slideUp = {
    hidden: { opacity: 0, y:20 },
    show: { opacity: 1, y:0  }
}

export const staggerCildren= {
    hidden: { opacity: 0  },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: circIn
      }
     
}
}