import { motion, MotionConfig } from "framer-motion"

const Gestures = () => {
  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center", gap: "0.8rem" }}>
      <MotionConfig transition={{ duration: 0.25 }}>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1, rotate: "2.5deg" }} className="example-button">Click Me!</motion.button>
      <motion.button whileHover={{ scale: 1.12 }} style={{ backgroundColor: "red" }} whileTap={{ scale: 1, rotate: "-2.5deg" }} className="example-button">Click Me!</motion.button>
      </MotionConfig>
    </div>
  )
}

export default Gestures