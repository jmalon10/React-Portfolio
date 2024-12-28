import resume from '../assets/Jacqueline_resume.pdf';

function Resume() {
    return (
        <section style={{ paddingTop: "30px" }} className="container text-center">
            
            <div className="skills">
                <div className="about-card"
                style={{ width: "40%" }}>
                <h2>Front-End Development Skills</h2>
                <ul className="list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                </div>
                <div className="about-card"
                style={{ width: "40%" }}>
                <h2>Back-End Development Skills</h2>
                <ul className="list-unstyled">
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL (Sequelize)</li>
                    <li>MongoDB (Mongoose)</li>
                    <li>GraphQL</li>
                </ul>
                </div>
            </div>
            <div style={{ paddingTop: "30px" }}>
            <a 
              href= {resume} 
              download="Jacqueline_Maloney_Resume.pdf" 
              className="btn btn-primary mb-4"
            >
              Download My Resume
            </a>
            </div>
        </section>
    );
}

export default Resume;
