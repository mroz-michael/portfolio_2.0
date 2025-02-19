import projectData from "../../../data/project_data.json"
import ProjectList from "../components/ProjectList";
import Navbar from "../components/NavBar";

const ProjectsPage = () => {
    return(
        <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-6">Some of My Recent Projects</h1>
            <ProjectList projects={projectData} />
        </main>
    )
}

export default ProjectsPage;