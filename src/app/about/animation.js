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


export const slideUpText = {
  initial: {
      y: "100%"
  },
  open: (i) => ({
      y: "0%",
      transition: {duration: 0.5, delay: 0.05 * i}
  }),
  closed: {
      y: "100%",
      transition: {duration: 0.5}
  }
}

export const opacity = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 0.7, delay:0.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.7, delay:0.5}
  }
}