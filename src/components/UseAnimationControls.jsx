import { motion, useAnimationControls } from "framer-motion"

const UseAnimationControls = () => {
  const front = useAnimationControls()
  const back = useAnimationControls()

  const handleClick = () => {
    front.start("flip")
    back.start("flip")
  }


  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center", placeItems: 'center', gap: "0.8rem" }}>
      <button onClick={handleClick} className="example-button">Flip It!</button>
      <div style={{ width: '150px', height: '150px', position: 'relative' }}>
        <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '150px', background: 'black', backfaceVisibility: 'hidden' }}
          variants={{ initial: { rotateY: '0deg' }, flip: { rotateY: ['0deg', '180deg', '0deg'] } }} transition={{ duration: 2, times: [0, .5, 1] }} initial="initial" animate={front} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '150px', background: 'red', backfaceVisibility: 'hidden' }}
          variants={{ initial: { rotateY: '180deg' }, flip: { rotateY: ['180deg', '0deg', '180deg'] } }} transition={{ duration: 2, times: [0, .5, 1] }} initial="initial" animate={back} />
      </div>
    </div>
  )
}

export default UseAnimationControls