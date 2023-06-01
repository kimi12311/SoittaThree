import Hero from './Hero'
import About from './About'
import { motion } from 'framer-motion'

const IndexPage = () => {
  return (
    <>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5, ease:"easeInOut"}}
    >
    <Hero/>
    <About/>
    </motion.div>
    </>
  )
}

export default IndexPage