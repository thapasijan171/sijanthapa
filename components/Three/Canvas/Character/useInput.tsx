import { useEffect, useState } from "react";

export const useInput = () => {
  const [input, setInput] = useState({
    foward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
  });

  const keys: { [key: string]: string } = {
    KeyW: "foward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    Space: "jump",
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function findKey(key: string): string {
    return keys[key];
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    }

    function handleKeyUp(e: KeyboardEvent): void {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [findKey]);

  return input;
};
