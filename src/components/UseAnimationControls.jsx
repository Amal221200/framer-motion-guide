import { motion, useAnimationControls } from "framer-motion"

const UseAnimationControls = () => {
  const controls = useAnimationControls()

  const handleClick = () => {
    controls.start("flip")
  }


  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center", gap: "0.8rem" }}>
      <button onClick={handleClick} className="example-button">Flip It!</button>
      <motion.div style={{ width: '150px', height: '150px', background: 'black' }}
        variants={{ initial: { rotate: '0deg' }, flip: { rotate: '360deg' } }} initial="initial" animate={controls} />
    </div>
  )
}

export default UseAnimationControls