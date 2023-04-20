import {useState, useEffect} from "react";

export default function Experiences() {
  const [experience, setExperience] = useState([]);
  
  useEffect(() => {
    fetch('https://portfolio.michelleparlevliet.ca/api/experiences')
      .then(response => response.json())
      .then(experience => setExperience(experience));
  }, []);
 
  return (
    <div id="experience-section">
      {experience.map(experience => (
        <div key={experience.id} className="experience">
          <h4>{experience.title}</h4>
          <p>{experience.content}</p>
        </div>
      ))}
    </div>
  );
}