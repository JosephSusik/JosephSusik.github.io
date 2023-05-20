import "./styles/ExperiencePage.css"

function ExperiencePage(props:any) {
    return(
        <section className="experience-page" id='experience' ref={props.refer}>
            <div className="institute">
                <p className="date">September 2019 - Present</p>
                <div className="info">
                    <p className="title">University</p>
                    <p>ABOUT</p>
                </div>
            </div>
            <div className="institute">
                <p className="date">May 2O22 - July 2023</p>
                <div className="info">
                    <p className="title">Data manager</p>
                    <p>ABOUT</p>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;