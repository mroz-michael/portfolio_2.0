import Project from "./Project";

const ProjectList = ({projects}) => {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
                <Project key={i} project={project} />
            ))}
        </div>
    )
}

export default ProjectList;