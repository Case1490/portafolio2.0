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
    percentage: "99",
  },
  {
    image: Figma,
    title: "Figma",
    percentage: "99",
  },
  {
    image: Firebase,
    title: "Firebase",
    percentage: "99",
  },
  {
    image: Git,
    title: "Git",
    percentage: "99",
  },
  {
    image: MongoDB,
    title: "MongoDB",
    percentage: "99",
  },
  {
    image: MySQL,
    title: "MySQL",
    percentage: "99",
  },
  {
    image: Node,
    title: "Node.js",
    percentage: "99",
  },
  {
    image: Python,
    title: "Python",
    percentage: "99",
  },
  {
    image: React,
    title: "React",
    percentage: "99",
  },
  {
    image: Tailwind,
    title: "Tailwind",
    percentage: "99",
  },
  {
    image: Vue,
    title: "Vue.js",
    percentage: "99",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="text-center w-5/6 m-auto">
        <h1 className="text-3xl my-10 font-bold uppercase text-[var(--OrangeMain)] border-b-4 mx-auto inline-block">
          Habilidades
        </h1>

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
