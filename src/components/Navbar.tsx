import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./styles/Navbar.css"

function Navbar() {
    const [sticky, setSticky] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickyNav);
        return () => window.removeEventListener('scroll', stickyNav);
    })

    const stickyNav = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 1 ? setSticky('sticky-nav') : setSticky('');
        }
    }

    return(
        <div className={"nav-wrapper " + sticky}>
            <nav>
                <a href="#home" className="nav-logo">[JS]</a>
                <ul>
                    <li><a href="#about" id="about-btn">About</a></li>
                    <li><a href="#experience" id="experience-btn">Experience</a></li>
                    <li><a href="#contact" id="contact-btn">Contact</a></li>
                </ul>
                <DarkModeToggle />
            </nav>
        </div>
    );
}

export default Navbar;