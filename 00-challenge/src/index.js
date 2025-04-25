import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./avatar.jpg" alt="avatar" className="avatar"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Byol Han</h1>
      <p>
        I’m a Frontend Developer with a strong foundation in HTML, CSS,
        JavaScript and modern frameworks like React and Vue.js. With hands-on
        experience in SASS, Tailwind CSS, Bootstrap, Material UI, and Quasar, I
        focus on building seamless, user-centric web applications that deliver
        both functionality and aesthetic appeal.
      </p>
    </div>
  );
}
function SkillList(props) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skill}
      {level === "beginner" && "👶"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
