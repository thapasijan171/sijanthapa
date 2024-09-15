// This component represents a Git console display used in the project
// It features:
// - Dynamic display of project name (full or shortened based on window width)
// - Git branch information
// - Custom icon display
// - Responsive design that adapts to window resizing
// - Uses custom MinConsoleText component for consistent text formatting
// - Utilizes useEffect and useState hooks for window width tracking
// - Custom styling with clsx for conditional classes
// - Props:
//   - branch: string - The current Git branch name
//   - icon: React.ReactNode - An icon to be displayed in the console
// Colors used: blue-900 for project name, blue-600 for Git syntax, red-900 for branch name and icon

import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";
import { useEffect, useState } from "react";

interface GitConsoleProps {
  branch: string;
  icon: React.ReactNode;
}

export default function GitConsole({
  branch,
  icon,
}: GitConsoleProps): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(1300);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => {
      handleResize;
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={clsx("flex gap-2 items-center")}>
      <MinConsoleText color={"text-blue-900"}>
        {windowWidth >= 576
          ? "Sijan's Portfolio"
          : "Portfolio"}
      </MinConsoleText>
      <MinConsoleText color={"text-blue-600"}>
        git:(
      </MinConsoleText>
      <MinConsoleText color={"text-red-900"}>
        {branch}
      </MinConsoleText>
      <MinConsoleText color={"text-blue-600"}>
        )
      </MinConsoleText>

      <div className={clsx("text-24p -mt-1 text-red-900")}>
        {icon}
      </div>
    </div>
  );
}
