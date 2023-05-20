import './styles/ProfilePage.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ProfilePage(props:any) {
    return(
        <section className='profile-page' id='home' ref={props.refer}>
            <div className='profile-info'>
                <div className='profile-name'>
                    <p>Joseph</p>
                    <p>Susík</p>
                </div>
                <p className='profile-fe-dev'>Frontend developer</p>
                <div className='profile-socials'>
                    <a href="https://www.linkedin.com/in/josef-sus%C3%ADk-a402241a0/" target="blank"><FaLinkedin className='icon'/></a>
                    <a href="https://github.com/JosephSusik" target="blank"><FaGithub className='icon'/></a>
                    <a href="https://www.instagram.com/joseph_powerlifting/" target="blank"><FaInstagram className='icon'/></a>
                    <a className='download-cv' href='./cv/josephsusik.pdf' download='josephsusik.pdf'>Download CV</a>
                </div>
            </div>
            <img className='profile-img' src={require('../5.jpg')} alt="" />
        </section>
    );
}

export default ProfilePage;