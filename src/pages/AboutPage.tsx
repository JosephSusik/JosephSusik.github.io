import './styles/AboutPage.css'

import { FaAngleRight } from "react-icons/fa";

function AboutPage(props:any) {
    return(
        <section className="about-page" id="about">
            <div className='about-page-rows'>
                <div className='about-page-cols' ref={props.refer}>
                    <div className='about-techstack'>
                        <p className='greet'>Tech Stack</p>
                        <ul>
                            <li><FaAngleRight className='icon'/> TypeScript</li>
                            <li><FaAngleRight className='icon'/> React</li>
                            <li><FaAngleRight className='icon'/> HTML</li>
                            <li><FaAngleRight className='icon'/> CSS</li>
                            <li><FaAngleRight className='icon'/> Git</li>
                            <li><FaAngleRight className='icon'/> SQL</li>
                            <li><FaAngleRight className='icon'/> C</li>
                        </ul>
                    </div>
                    <div className='about-text'>
                    <p className='greet'>Hello there!</p> <br />
                    <p> My name is <span className="emph">Joseph</span>, and I am a 23-year-old computer science student from the Czech Republic. <br />
                        I have always had a passion for <span className="emph">problem solving</span>, and I am currently studying <a href="https://www.fit.vut.cz/.en" target="blank">Faculty of Information Technology, BUT</a>. <br /><br />
                        I am particularly interested in <span className="emph">web development</span> and creating innovative and engaging user experiences, and I am constantly <span className="emph">trying to improve my skills</span>. <br />
                        <br />
                        As a determined and <span className="emph">hardworking</span> individual, I am committed to achieving my career goals 
                        and becoming a great frontend developer. <br />
                        I believe that my love for coding, combined with my <span className="emph">dedication to learning</span> and growing as a developer,
                        will help me succeed in this exciting and rapidly-evolving field.</p>
                    </div>
                </div>
                <div className='image-gallery'>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;