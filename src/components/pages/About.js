import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about">
            <div className="h1-bg">
                <h1 className="section-title">ABOUT ME</h1>
            </div>
            <div className="about-main">
                <h3>Emad A highly talented, driven, and flexible frontend-developer with a proven record of delivering creative and innovative solutions. A proven ability of developing projects from inception through production to final delivery, ensuring that all work is effective, appropriate, and delivered within agreed timescales. Able to work as part of a team Strong problem-solving abilities and a passion for staying up to date with the latest industry trends and technologies.
                </h3>
            </div>
            <h2>Please check</h2>
            <div className="links">
                <ul>
                    <li><a href="https://github.com/EmadSaeed2" target='_blank'>My Github profile</a></li>
                    <li><a href="https://www.linkedin.com/in/emad-saeed-398767134/" target='_blank'>LinkedIn profile</a></li>
                    <li><a href="mailto:eaf.saeed@gmail.com">Email</a></li>
                    <li><a href={process.env.PUBLIC_URL + "/images/Emad-Saeed-CV.pdf"} target='_blank'>CV</a></li>
                </ul>
            </div>
        </section >
    )
}

export default About