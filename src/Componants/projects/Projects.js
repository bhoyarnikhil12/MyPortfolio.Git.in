import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Admin Sales Dashboard"
          des="It is a web-based interface that displays relevant data about a website, app, or system's performance and operation. It's a key component of an admin panel, which is a centralized interface that allows administrators to manage, monitor, and control various aspects of a software application. 
 "       
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Purpose: The project's purpose, such as providing online shopping to customers of a real shop.
 
                The features of the website, such as a shopping cart application.
 
                The technologies used to develop the website.
"
          src={projectTwo}
        />
        <ProjectsCard
          title="Weather App"
          des=" It is a web application that leverages HTML, CSS,JavaScript, and Reactjs to fetch weather data from a weather API and display current weather conditions and forecasts for a specific location."
          src={projectThree}
        />
        <ProjectsCard
          title="Portfolio"
          des=" It is a grouping of projects, and programs. It can also include other project-related activities and responsibilities. The purpose of a portfolio is to establish centralized management and oversight for many projects and programs."
          src={projectFour}
        />
      </div>
    </section>
  );
}

export default Projects