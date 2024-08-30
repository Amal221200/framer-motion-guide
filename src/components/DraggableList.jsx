import { Reorder } from "framer-motion"
import { useRef, useState } from "react"


const DraggableList = () => {
    const [list, setList] = useState(["Tomato", "Potato", "Ginger", "Garlic", "Onion"])

    return (
        <div  style={{ height: "100vh", display: "grid", placeContent: "center", gap: "0.8rem" }}>
            <Reorder.Group axis="y" values={list} onReorder={setList} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem',}}>
                {
                    list.map((item) => (
                        <Reorder.Item key={item} value={item} style={{ background: 'yellow', padding: '5px 10px', fontSize: '25px', borderRadius: '10px', cursor: 'grab' }} >
                            {item}
                        </Reorder.Item>
                    ))
                }
            </Reorder.Group>
        </div>
    )
}

export default DraggableList