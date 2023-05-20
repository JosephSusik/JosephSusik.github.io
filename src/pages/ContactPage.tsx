import "./styles/ContactPage.css"
import { useState } from "react";

import { FaDiscord } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClone } from "react-icons/fa";

function ContactPage() {
    const [mail, setMail] = useState(false);
    const [discord, setDiscord] = useState(false);

    const changeMail = () => {
        setMail(true);
        navigator.clipboard.writeText("joseph.susik@gmail.com")
        setTimeout(() => setMail(false), 1000)
    }

    const changeDiscord = () => {
        setDiscord(true);
        navigator.clipboard.writeText("Pepa#7580")
        setTimeout(() => setDiscord(false), 1000)
    }

    return(
        <section className="contact-page" id="contact">
            <p>Get in touch!</p>
            <button onClick={changeMail} title="Click to copy"><span><FaEnvelope />{mail? "Copied to clipboard!":"joseph.susik@gmail.com"}</span><FaClone className="icon-copy"/></button>
            <button onClick={changeDiscord} title="Click to copy"><span><FaDiscord />{discord? "Copied to clipboard!":"Pepa#7580"}</span><FaClone className="icon-copy"/></button>
        </section>
    );
}

export default ContactPage;