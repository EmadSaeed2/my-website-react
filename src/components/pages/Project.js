const Project = (props) => {
    return (
        <article className="project">
            <a href={props.projectLink} target='_blank'>
                <h2>{props.title}</h2>
                <img src={props.imgLink} alt="" />
                <div className="description-bg">
                    {/* <p className="description">{props.description}</p> */}
                    <a href={props.gitHubLink} target='_blank' className="gitHubLink">GitHub Link</a>
                </div>
            </a>
        </article>
    )
}

export default Project