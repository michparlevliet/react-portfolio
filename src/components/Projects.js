import {useState, useEffect} from "react";

export default function Projects() {
  const [project, setProject] = useState([]);
  
  useEffect(() => {
    fetch('https://portfolio.michelleparlevliet.ca/api/projects')
      .then(response => response.json())
      .then(project => setProject(project));
  }, []);
 
  return (
    <div id="projects-section">
      {project.map(project => (
        <div key={project.id} className="project">
          <h4>{project.title}</h4>
          <button className="visit-page"><a href={project.url}>View Project</a></button>
          <p>{project.content}</p>
          <img className="project-image" src={project.image} alt="project image"/>
        </div>
      ))}
    </div>
  );
}