import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ViewBased = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div style={{ height: "110vh", display: 'grid', placeContent: 'center' }} >
        <h3>Scroll Down</h3>
      </div>
      <motion.div style={{ height: '100vh', background: 'black', opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} />
      <div ref={ref} style={{ height: '100vh', backgroundColor: isInView ? "blue" : 'red', transition: 'background-color 2s' }} />
    </>
  )
}

export default ViewBased