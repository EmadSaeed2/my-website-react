import Project from "./Project/Project"
import data from "../../data.json"

const Portfolio = () => {
    console.log(data.projects)
    return (
        <section id="portfolio">
            <Project />
        </section>
    )
}

export default Portfolio