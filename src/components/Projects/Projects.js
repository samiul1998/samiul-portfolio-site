import React from "react";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import useProjects from "./../../hooks/useProjects";
import { useNavigate } from 'react-router-dom';
import Project from "../Project/Project";



const Projects = () => {
  const [projects,projectsLoading] = useProjects();
  const navigate = useNavigate();

  // console.log(projects);



  if(projectsLoading){
    return <p className="text-center"> Loading....</p>;
  }

  

  

  // console.log(projects);

  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="text-5xl text-center font-bold mb-5"
      >
        Top Projects
      </h1>
      <div data-aos="slide-right" data-aos-delay="50">
        <div className="sm:-m-0  lg:flex  ">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
