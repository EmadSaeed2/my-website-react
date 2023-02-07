const Project = (props) => {
    return (
        <article className="project">
            <a href="pages/project-05.html">
                <h2>{props.title}</h2>
                <img src={props.imgLink} alt="" />
                <div className="description-bg">
                    <p className="description">{props.description}</p>
                </div>
            </a>
        </article>
    )
}

export default Project