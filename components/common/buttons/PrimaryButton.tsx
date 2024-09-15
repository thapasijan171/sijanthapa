// This component defines a custom primary button with a console-like style.
// It's used for interactive elements in the UI, featuring:
// - Custom arrow icons on both sides
// - A yellow background for the text
// - Customizable text content
// - An onClick event handler
// The button is designed to fit the overall console/terminal aesthetic of the application.

import { clsx } from "clsx";
import ButtonArrowLeft from "../icons/ButtonArrowLeft";
import ButtonArrowRight from "../icons/ButtonArrowRight";

interface PrimaryButtonProps {
  children: string;
  event: Function;
}

export default function PrimaryButton({
  children,
  event,
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className='flex button_primery_console'
      onClick={() => event()}>
      <ButtonArrowLeft />
      <p
        className={clsx(
          "px-2 h-[35px] bg-yellow-700 flex items-center justify-center",
          "font-main text-grey-900 font-500"
        )}>
        _{children}
      </p>
      <ButtonArrowRight />
    </button>
  );
}
