import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function Camera(): JSX.Element {
  const camera = React.useRef<any>();

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault={true}
      position={[12, 8, 20]}
      fov={35}
      zoom={0.85}
    />
  );
}
