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
  return <img className="avatar" src="/image.jpg" alt="Vincet Kyalo" />;
}

function Intro() {
  return (
    <div>
      <h1>Vincent Kyalo</h1>
      <p>
        Full-stack web dev and a data scientist. When not coding or reading, I
        like to listen to music and play video games.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML + CSS" emoji="💪" color="grey" />
      <Skill skill="Savelte" emoji="👶" color="red" />
      <Skill skill="Java script" emoji="💪" color="green" />
      <Skill skill="Python" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
