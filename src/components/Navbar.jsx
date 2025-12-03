import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return(
    <>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </div>
    </>
    )
}

export default Navbar;