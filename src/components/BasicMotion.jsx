import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";


const BasicMotion = () => {
    const [visible, setVisible] = useState(true);
    return (
        <div style={{ height: "100vh", display: "grid", placeContent: "center", gap: "0.8rem" }}>
            <motion.button type="button" onClick={() => setVisible(!visible)} layout className="example-button">Show / Hide</motion.button>
            <AnimatePresence mode="popLayout">
                {visible && <motion.div initial={{ rotate: '0deg', scale: 0, y: 0 }} animate={{ rotate: '180deg', scale: 1, y: [0, 150, -150, -150, 0] }} exit={{ rotate: '0deg', scale: 0 }} transition={{ duration: 1, times: [0, .25, .5, .85, 1] }} style={{ width: 150, height: 150, background: "black" }} />}
            </AnimatePresence>
        </div>
    )
}

export default BasicMotion