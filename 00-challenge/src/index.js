import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="HTML/CSS" emoji="😁" color="blue" />
      <Skill skill="JavaScript" emoji="☺️" color="yellow" />
      <Skill skill="React" emoji="😉" color="skyblue" />
      <Skill skill="Web Design" emoji="😊" color="green" />
      <Skill skill="Git and Github" emoji="😚" color="brown" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
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
