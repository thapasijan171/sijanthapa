import React from "react";
// import DateConsole from "../date/DateConsole";
import dynamic from "next/dynamic";

const DateConsoleDynamic = dynamic(
  () => import("../date/DateConsole"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function FooterConsole(): JSX.Element {
  return (
    <div className='w-full flex justify-end'>
      <DateConsoleDynamic />
    </div>
  );
}
