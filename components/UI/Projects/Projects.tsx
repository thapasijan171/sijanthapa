import { useState } from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { FaGamepad } from "react-icons/fa";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import clsx from "clsx";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import ProyectCard from "@/components/common/cards/ProyectCard";
import {
  GiDeliveryDrone,
  GiMaterialsScience,
} from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdCatchingPokemon } from "react-icons/md";
import Logo from "@/components/common/icons/Logo";

export default function Projects(): JSX.Element {
  const [projects] = useState([
    {
      id: 0,
      icon: <Logo />,
      title: "LeetCode Account",
      description: `It's not a projects, I am just age of 17. Next.js developer passionate about coding and innovation. Finding inspiration for new projects. I am driven by the desire to bring his creative ideas to life through code.`,
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
      icon: <GiDeliveryDrone />,
      title: "Drone-It YourSelf",
      description: `This is a little project made in React and Three.js, where I explore the capabilities of Three.js for change a scene in hot reload(still working).`,
      techs: ["Three.js", "WebXR", "React"],
      linkTo: () =>
        window.open(
          "https://costume-drone.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 2,
      icon: <IoMdPlanet />,
      title: "Night of Stars",
      description: `This is a project I made for my College, I teach other students how to user the basics of WebXR`,
      techs: [
        "Three.js",
        "WebXR",
        "Next.js",
        "GLSL",
        "TypeScript",
      ],
      linkTo: () =>
        window.open(
          "https://nightstars.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 3,
      icon: <BsFillPinMapFill />,
      title: "Artics Pro One",
      description: `"I developed an impressive headphone website featuring sleek scrolling effects to enhance user engagement and showcase product details. The design combines smooth transitions and visual appeal, offering an immersive browsing experience."`,
      techs: ["Three.js", "WebXR", "Blender"],
      linkTo: () =>
        window.open(
          "https://artics-pro-one.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 4,
      icon: <MdCatchingPokemon />,
      title: "Pokedex",
      description: `Pokémon are fictional creatures that trainers capture and train for battles in the Pokémon universe. The Pokédex is an electronic device that provides detailed information about each Pokémon species and evolutionary stages.`,
      techs: ["Three.js", "Javascript", "Animations"],
      linkTo: () =>
        window.open(
          "https://pokedex-pro.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 5,
      icon: <GiMaterialsScience />,
      title: "Shaders with GLSL",
      description: `This is a template for using the basics of GLSL with Three.js and React(on updating).`,
      techs: ["Three.js", "React", "GLSL"],
      linkTo: () =>
        window.open(
          "https://github.com/thapasijan171/Shaders-Three.js",
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
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  techs={project.techs}
                  linkTo={project.linkTo}
                />
              </div>
            ))}

            {/* <div
              className={clsx(
                "lg:w-full max-w-[340px]",
                "md:w-[45%]",
                "w-full"
              )}>
              <ProyectCard
                image='/bg/bg-vivid_1.jpg'
                title='Drone it yourselft'
                description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia odit, dicta suscipit magni velit rem?`}
                techs={["Three.js", "WebXR", "React"]}
                linkTo='fff'
              />
            </div>
            <div
              className={clsx(
                "lg:w-full max-w-[340px]",
                "md:w-[45%]",
                "w-full"
              )}>
              <ProyectCard
                image='/bg/bg-vivid_1.jpg'
                title='Drone it yourselft'
                description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia odit, dicta suscipit magni velit rem?`}
                techs={["Three.js", "WebXR", "React"]}
                linkTo='fff'
              />
            </div> */}
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
