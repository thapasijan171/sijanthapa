// This component represents a project card used to display project information
// It includes an icon, title, description, technologies used, and a link
// The card is structured with sections for the project image, title, description, and technologies
// Props:
//   - icon: React node for the project icon
//   - title: String for the project title
//   - description: String for the project description
//   - techs: Array of strings representing technologies used in the project
//   - linkTo: Function to handle navigation when the card is clickedw

import React from "react";
import BodyText from "../text/BodyText";
import ProyectCardTitle from "./ProyectCardTitle";
import { clsx } from "clsx";
import PrimaryButton from "../buttons/PrimaryButton";

interface ProyectCardProps {
  title: string;
  description: string;
  techs: Array<string>;
  linkTo: Function;
}

export default function ProyectCard({
  title,
  description,
  techs,
  linkTo,
}: ProyectCardProps): JSX.Element {
  return (
    <div
      className={clsx(
        "w-full",
        "flex flex-col gap-4"
      )}>
              <div
        className={clsx(
          "image_project",
          "w-full h-[30px] relative",
          "text-[150px] text-yellow-900 text-center flex justify-center items-center"
        )}>
      </div>
      <div
        className={clsx(
          "title_description_project",
          "flex gap-2 flex-col w-full"
        )}>
        <ProyectCardTitle>{title}</ProyectCardTitle>
        <BodyText
          color={"text-white-1000"}
          uppercase={false}
          weight={"font-300"}>
          {description}
        </BodyText>
      </div>
      <div className='techs_card_project'>
        <BodyText
          color={"text-yellow-900"}
          uppercase={true}
          weight={"font-700"}>
          Techs
        </BodyText>
        <div className='flex flex-wrap gap-2 pl-4'>
          {techs.map((item, index) => (
            <BodyText
              key={index}
              color={"text-white-1000"}
              uppercase={true}
              weight={"font-300"}>
              {index !== techs.length - 1
                ? `${item},`
                : `${item}.`}
            </BodyText>
          ))}
        </div>
      </div>
      <div className='button_project'>
        <PrimaryButton event={linkTo}>Visit</PrimaryButton>
      </div>
    </div>
  );
}
