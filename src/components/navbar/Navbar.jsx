import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Basics</Link>
      <Link to="/gestures">Gestures</Link>
      <Link to="/use-animation-controls">useAnimationControls</Link>
      <Link to="/view-based">View-Based</Link>
      <Link to="/scroll-based">Scroll-Based</Link>
      <Link to="/staggered">Staggered</Link>
    </nav>
  )
}

export default Navbar