import clsx from "clsx";

interface MinConsoleTextProps {
  children: string;
  color: string;
}
export default function MinConsoleText({
  children,
  color,
}: MinConsoleTextProps): JSX.Element {
  return (
    <p
      className={clsx(
        "font-main text-16p leading-24p font-600 uppercase",
        `${color}`
      )}>
      {children}
    </p>
  );
}
