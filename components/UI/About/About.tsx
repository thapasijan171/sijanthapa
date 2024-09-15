// This code defines the About component, which displays information about hobbies and skills.
// It imports various UI components and icons for use in the component.
// The component includes a table-like structure (Table_Console) to show hobby levels.
// It uses custom console-style components for a unique visual presentation.

import React from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import BodyLine from "@/components/common/consoles/console_lines/BodyLine";
import clsx from "clsx";
import Table_Console from "@/components/common/consoles/console_lines/Table_Console";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import { ImPacman } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { TbCoffee } from "react-icons/tb";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { GiPencilBrush } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";

export default function About(): JSX.Element {
  const HobbiesData = {
    header: {
      label: "HOB",
      items: ["HOB", "LEVEL"],
    },
    description: {
      label: "Level",
      items: [
        {
          prefix: "coffee_lover",
          icon: <AiFillHeart />,
          label: "EXCELENT",
        },
        {
          prefix: "barista",
          icon: <TbCoffee />,
          label: "Good",
        },
        {
          prefix: "3d",
          icon: <HiOutlineCubeTransparent />,
          label: "Keep inproving",
        },
        {
          prefix: "pating",
          icon: <GiPencilBrush />,
          label: "Keep inproving",
        },
        {
          prefix: "drawing",
          icon: <FaPencilAlt />,
          label: "Keep inproving",
        },
      ],
    },
  };

  function openCV(): void {
    const fileUrl = "https://leetcode.com/u/thapasijan171/";
    window.open(fileUrl);
  }

  return (
    <ConsoleSecction
      id={"about"}
      border={true}
      branch={"about"}
      icon={<ImPacman />}>
      <>
        <div className={clsx("w-full ")}>
          <HeaderLine>Sijan Thapa</HeaderLine>
        </div>

        <div
          className={clsx(
            "md:w-full md:flex md:flex-nowrap gap-2",
            "flex-wrap"
          )}>
          <div
            id='about-resume'
            className={clsx(
              "md:w-[50%] md:max-w-[50%] gap-5",
              "w-full flex flex-col gap-5"
            )}>
            <CommandLine command='ls' label='resume' />
            <BodyLine>
              Hello! I&apos;m a NextJS developer based
              in Nepal who enjoys working with Web
              Technologies and integrating them with 3D to
              create unique and captivating web pages.
            </BodyLine>
            <BodyLine>
              My passion for learning drives me to explore
              new technologies, tackle fresh challenges, and
              seek out exciting opportunities.
            </BodyLine>
            <div
              className={clsx("py-3 pl-[30px] flex gap-3")}>
              <PrimaryButton event={() => openCV()}>
                LeetCode
              </PrimaryButton>
            </div>
          </div>

          <div
            id='about-education'
            className={clsx(
              "md:w-[50%] md:max-w-[50%] gap-5",
              "w-full flex flex-col gap-5"
            )}>
            <div
              id='about-education-school'
              className='w-full'>
              <CommandLine
                command='console.log'
                label='education'
              />
              <BodyLine>
                Bachelor of Computer Applications(2023 - present)
              </BodyLine>
              <BodyLine>
                Informatic College Pokhara - ICP
              </BodyLine>
            </div>

            <div
              id='about-education-table'
              className='w-full'>
              <CommandLine command='ls' label='hobbies' />
              <div className='w-full pl-[38px] pt-4'>
                <Table_Console
                  headers={HobbiesData.header}
                  descriptions={HobbiesData.description}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </ConsoleSecction>
  );
}
