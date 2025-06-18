import CardSkill from "../components/CardSkill";

// IMPORT IMAGES ICONS
import Angular from "../assets/habilidades/angular.png";
import Bootstrap from "../assets/habilidades/bootstrap.png";
import Figma from "../assets/habilidades/figma.png";
import Firebase from "../assets/habilidades/firebase.png";
import Git from "../assets/habilidades/git.png";
import MongoDB from "../assets/habilidades/mongodb.png";
import MySQL from "../assets/habilidades/mysql.png";
import Node from "../assets/habilidades/node.png";
import Python from "../assets/habilidades/python.png";
import React from "../assets/habilidades/react.png";
import Tailwind from "../assets/habilidades/tailwind.png";
import Vue from "../assets/habilidades/vue.png";

const dataSkills = [
  {
    image: Angular,
    title: "Angular",
    percentage: "60",
  },
  {
    image: Bootstrap,
    title: "Bootstrap",
    percentage: "90",
  },
  {
    image: Figma,
    title: "Figma",
    percentage: "75",
  },
  {
    image: Firebase,
    title: "Firebase",
    percentage: "90",
  },
  {
    image: Git,
    title: "Git",
    percentage: "80",
  },
  {
    image: MongoDB,
    title: "MongoDB",
    percentage: "85",
  },
  {
    image: MySQL,
    title: "MySQL",
    percentage: "70",
  },
  {
    image: Node,
    title: "Node.js",
    percentage: "85",
  },
  {
    image: Python,
    title: "Python",
    percentage: "80",
  },
  {
    image: React,
    title: "React",
    percentage: "86",
  },
  {
    image: Tailwind,
    title: "Tailwind",
    percentage: "80",
  },
  {
    image: Vue,
    title: "Vue.js",
    percentage: "75",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="text-center w-5/6 text-white m-auto py-24">
        <div className=" mb-10">
          <h1 className="title-page">Habilidades 🏃‍♂️‍➡️</h1>
          <p>
            A lo largo de mi experiencia he desarrollado una serie de
            habilidades que me permiten enfrentar desafíos con eficiencia y
            creatividad. Estas capacidades son el resultado de años de
            formación, práctica y constante aprendizaje.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-y-8">
          {dataSkills.map((skill, index) => (
            <CardSkill
              key={index}
              image={skill.image}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
