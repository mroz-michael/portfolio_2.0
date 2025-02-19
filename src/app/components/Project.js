"use client"
import { FaJava, FaNode } from "react-icons/fa";
import { IoLogoPython, IoLogoCss3, IoLogoReact, IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql, SiJunit5, SiGithub } from "react-icons/si";
import { useState } from "react";

const Project = ({ project }) => {
  const logos = {
    java: <FaJava />,
    node: <FaNode />,
    python: <IoLogoPython />,
    css: <IoLogoCss3 />,
    react: <IoLogoReact />,
    js: <IoLogoJavascript />,
    html: <IoLogoHtml5 />,
    mongodb: <DiMongodb />,
    express: <SiExpress />,
    mysql: <SiMysql />,
    junit: <SiJunit5 />
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className="relative bg-gray-800 p-6 rounded-lg hover:shadow-[0_4px_10px_rgba(74,222,128,0.5)] transition group"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <div className="bg-gray-800 p-6 rounded-lg transition">
            
            <div className="flex justify-between items-center">
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-2xl font-semibold transition-colors duration-300 hover:text-green-400">
                    {project.name}
                    </h2>
                </a>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-gray-400 hover:text-white transition" size={30} />
                </a>
            </div>
        
            <div className="flex space-x-3 mt-2">
                {project.tech_used.map((tech) => (
                <span key={tech} className="text-xl text-gray-400">
                    {logos[tech] || tech}
                </span>
                ))}
            </div>

            <p className="text-gray-400 mt-4">{project.comment}</p>
        </div>
    </div>
  );
};

export default Project;
