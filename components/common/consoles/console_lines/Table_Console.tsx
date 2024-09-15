// This component defines a Table_Console used for displaying data in a console-style table format
// It features:
// - A customizable header with a label and multiple items
// - A description section with icons, prefixes, and labels for each row
// - Responsive design using Tailwind CSS classes
// - Uses React hooks (useState and useEffect) for managing component state
// - Imports BodyText component and clsx for conditional class names
// - Defines interfaces for HeaderProps, DescriptionProps, and Table_ConsoleProps
// - The component is designed to fit the overall console/terminal aesthetic of the application
// - It can be used to display various types of tabular data, such as skills, hobbies, or project details

import { useEffect, useState } from "react";
import BodyText from "../../text/BodyText";
import clsx from "clsx";

export interface HeaderProps {
  label: string;
  items: Array<string>;
}

export interface DescriptionProps {
  label: string | React.Component;
  items: Array<{
    prefix: string;
    icon: React.ReactNode;
    label: string | React.ReactNode;
  }>;
}

export interface Table_ConsoleProps {
  headers: HeaderProps;
  descriptions: DescriptionProps;
}

export default function Table_Console({
  headers,
  descriptions,
}: Table_ConsoleProps): JSX.Element {
  const [headersState, setHeadersState] =
    useState<HeaderProps>({ label: "", items: [] });
  const [descriptionState, setDescriptionState] =
    useState<DescriptionProps>({
      label: "",
      items: [
        {
          prefix: "",
          icon: <p></p>,
          label: "",
        },
      ],
    });

  useEffect(() => {
    setHeadersState(headers);
    setDescriptionState(descriptions);
  }, [headers, descriptions]);

  return (
    <div className={clsx("w-full")}>
      <table className={clsx("outline-[1px] ", "w-full")}>
        <thead className={clsx("w-full")}>
          <tr>
            {headersState.items.length > 0 &&
              headersState.items.map((header, index) => (
                <th
                  className={clsx(
                    "text-left",
                    index === 0
                      ? "lg:w-[35%] w-[50%]"
                      : "lg:w-[65%] w-[50%]"
                  )}
                  key={index}>
                  <BodyText
                    color={"text-yellow-700"}
                    uppercase={true}
                    weight='font-600'>
                    {header}
                  </BodyText>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className={clsx("w-full text-left")}>
          {descriptionState.items.map((row, index) => (
            <tr key={index} className={"py-3"}>
              <td className={clsx("py-1")}>
                <BodyText
                  color={"text-white-1000"}
                  uppercase={true}
                  weight='font-300'>
                  {`--${row.prefix}`}
                </BodyText>
              </td>

              <td className='flex h-fit items-center gap-2 py-1'>
                {
                  <div
                    className={clsx(
                      "text-24p text-yellow-900"
                    )}>
                    {row.icon}
                  </div>
                }
                <BodyText
                  color={"text-white-1000"}
                  uppercase={true}
                  weight='font-300'>
                  {row.label}
                </BodyText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
