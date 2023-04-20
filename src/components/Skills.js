import {useState, useEffect} from "react";

export default function Skills() {
  const [skill, setSkill] = useState([]);
  
  useEffect(() => {
    fetch('https://portfolio.michelleparlevliet.ca/api/skills')
      .then(response => response.json())
      .then(skill => setSkill(skill));
  }, []);
 
  return (
    <div id="skills-section">
      {skill.map(skill => (
        <div key={skill.id} className="skill">
          <h4>{skill.title}</h4>
        </div>
      ))}
    </div>
  );
}