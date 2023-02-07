import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <header>
            <div id="blue-squre"></div>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </nav>
        </header>
    )
}

export default Navigation