import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

const skills = ['React JS', 'HTML', 'CSS', 'JavaScript', 'Node JS', 'Next JS', 'TypeScript', 'React Query', 'Rust', 'Tailwind CSS']

const Staggered = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('li', { opacity: 1, y: 0 }, { delay: stagger(0.1, { from: 'first' }) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div style={{ marginTop: '70px' }}>
      <h2 style={{ textAlign: 'center' }}>My Skills</h2>
      <AnimatePresence>
        <ul ref={scope} style={{ display: 'flex', justifyContent: 'center', maxWidth: 600, marginInline: 'auto', flexWrap: 'wrap', rowGap: ".5rem", columnGap: '.8rem' }}>
          {
            skills.map((skill) => (
              <motion.li key={skill} initial={{ opacity: 0, y: 100 }} style={{ padding: '.2rem .4rem', border: '1px solid rgba(0 0 0 / 0.2)', borderRadius: '5px' }} >
                {skill}
              </motion.li>
            ))
          }
        </ul>
      </AnimatePresence>
    </div>
  )
}

export default Staggered