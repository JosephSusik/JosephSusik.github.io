import "./styles/ExperiencePage.css"
import { FaAngleRight } from "react-icons/fa";

function ExperiencePage(props:any) {
    return(
        <section className="experience-page" id='experience' ref={props.refer}>
            <div className="institute">
                <div className="date">
                    <p>September 2019</p>
                    <p>-</p>
                    <p>May 2024</p>
                </div>
                <div className="info">
                    <p className="title">Brno University of Technology</p>
                    <br />
                    <p>Here are some of my classes:</p>
                     <ul>
                        <li><FaAngleRight />Algorithms and Data Structures</li>
                        <li><FaAngleRight />Computer Communications and Networks</li>
                        <li><FaAngleRight />Operating Systems</li>
                        <li><FaAngleRight />Database Systems</li>
                        <li><FaAngleRight />Discrete Mathematics</li>
                        <li><FaAngleRight />Linear Algebra</li>
                    </ul>
                </div>
            </div>
            <div className="institute">
                <div className="date">
                    <p>May 2O22</p>
                    <p>-</p>
                    <p>July 2023</p>
                </div>
                <div className="info">
                    <p className="title">Data manager at LifeLiqe</p>
                    <br />
                    <ul>
                        <li><FaAngleRight />Managing pipelines</li>
                        <li><FaAngleRight />Writing scripts</li>
                        <li><FaAngleRight />Work with database - LinqPad</li>
                        <li><FaAngleRight />HTML / CSS</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;