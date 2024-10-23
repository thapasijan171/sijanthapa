import { useState } from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { FaGamepad } from "react-icons/fa";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import clsx from "clsx";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import ProyectCard from "@/components/common/cards/ProyectCard";

export default function Projects(): JSX.Element {
  const [projects] = useState([
    {
      id: 0,
      title: "LeetCode Account",
      description: `It's not a projects, I am just age of 17. Next.js developer passionate about coding and innovation.`,
      techs: [
        "Typescript",
        "JavaScript",
        "Java",
        "C++",
      ],
      linkTo: () =>
        window.open(
          "https://www.leetcode.com/u/thapasijan171",
          "_blank"
        ),
    },
    {
      id: 1,
      title: "PlanX",
      description: `PlanX with many features, including local storage, task sharing via links, and offline use as a PWA.`,
      techs: [
        "React.js",
        "Vite",
        "TypeScript",
        "PWA"
      ],
      linkTo: () =>
        window.open(
          "https://planx.vercel.app",
          "_blank"
        ),
    },
    {
      id: 2,
      title: "handWriter",
      description: `I hate writing assignments so I made this tool that converts text to an image looks like handwriting.`,
      techs: [
        "html",
        "css",
        "js(Vanilla)",
      ],
      linkTo: () =>
        window.open(
          "https://google-sh.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 3,
      title: "CanvasCraft",
      description: `A collaborative drawing app with Go backend, React, TypeScript, Zustand frontend, and SQLite for saving changes.`,
      techs: ["TypeScript", "Zustand", "Go"],
      linkTo: () =>
        window.open(
          "https://github.com/thapasijan171/Shaders-Three.js",
          "_blank"
        ),
    },
    {
      id: 4,
      title: "Pokedex",
      description: `Pokémon are creatures trainers catch and train for battles. The Pokédex gives detailed info about each species`,
      techs: ["Three.js", "Javascript", "Animations"],
      linkTo: () =>
        window.open(
          "https://pokedex-pro.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 5,
      title: "Artics Pro One",
      description: `Developed a headphone website with sleek scrolling effects, smooth transitions, and visual appeal for an immersive browsing experience.`,
      techs: ["Three.js", "Gsap", "Blender"],
      linkTo: () =>
        window.open(
          "https://artics-pro-one.vercel.app/",
          "_blank"
        ),
    },
  ]);

  return (
    <ConsoleSecction
      id='projects'
      border={true}
      branch='free-time'
      icon={<FaGamepad />}>
      <div className={clsx("flex w-full flex-wrap")}>
        <div id='projects_title' className={clsx("w-full")}>
          <HeaderLine>Projects</HeaderLine>
        </div>
        <div id='projects_items' className={clsx("w-full")}>
          <CommandLine command='ls' label='projects' />
          <div
            className={clsx(
              "w-full pt-8 lg:gap-0",
              "md:flex justify-between md:pl-[38px]",
              "flex flex-wrap gap-9"
            )}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={clsx(
                  "lg:w-full max-w-[340px]",
                  "md:w-[45%]",
                  "w-full"
                )}>
                <ProyectCard
                  title={project.title}
                  description={project.description}
                  techs={project.techs}
                  linkTo={project.linkTo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
