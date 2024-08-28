import { useScroll, useTransform, motion, useSpring } from "framer-motion"

const ScrollBased = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(86 1 245)', 'rgb(1 245 13)'])
  return (
    <div>
      <motion.div style={{ position: 'fixed', top: 0, left: 0, transformOrigin: 'left', width: '100%', height: '5px', scaleX, background }} />
      <div style={{ maxWidth: '700px', marginInline: 'auto', padding: '1.2rem', marginTop: '20px' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque at fugit non dolore! Delectus possimus voluptatem blanditiis, quis laborum aliquam repudiandae ea deleniti voluptatum mollitia architecto sequi fugiat molestias id a repellat velit laboriosam aperiam nihil reiciendis? Quaerat nihil tenetur est quod enim esse odit ducimus autem expedita architecto quasi rerum libero, recusandae consequuntur quia ratione doloribus ipsam placeat magnam eius exercitationem corporis! Cumque unde ullam, nobis exercitationem eligendi repellendus blanditiis eum culpa amet nulla eveniet, incidunt possimus enim eaque vitae error atque assumenda maxime, fuga corrupti dignissimos. Quaerat aut rem, doloribus possimus sunt velit maxime porro ipsa nesciunt eligendi vel dolore impedit qui pariatur repellat facere eveniet. Voluptatibus quasi amet ullam minus iusto quidem rem atque dolor optio, cumque nesciunt incidunt quaerat vitae, neque enim maxime laudantium laborum perspiciatis sint esse asperiores nostrum delectus commodi.
        </p>
      </div>
    </div>
  )
}

export default ScrollBased