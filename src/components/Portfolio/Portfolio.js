import Project from "./Project/Project"
import data from "../../data.json"

const Portfolio = () => {
    const projects = data.projects;
    return (
        <section id="portfolio">
            {projects.map((project, index) => {
                return (
                    <Project key={index} title={project.title} imgLink={project.imgLink} description={project.description} />
                )
            })}
        </section>
    )
}

export default Portfolio