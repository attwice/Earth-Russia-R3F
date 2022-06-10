
import { Html } from "@react-three/drei";
import type { MutableRefObject } from "react";
import type { Vector3 } from "three";
import { Object3D } from "three";
import { Coord } from "./App";

export interface PointProps {
  forwardRef: MutableRefObject<Object3D | undefined>;
  coord: Coord;
  position: Vector3;
}

export function Point({
  forwardRef,
  coord,
  position
}: PointProps): JSX.Element {
  return (
    <Html
      className={`point  ${coord.hash}`}
      position={position}
      occlude={[forwardRef]}
    >
      {coord.icon ? (
        <a href={coord.link}> 
        <img
          onClick={(e) => (window.location.hash = coord.hash)}
          alt={coord.title}
          src={coord.icon}
        /></a>
      ) : (
        <button onClick={(e) => (window.location.hash = coord.hash)}>
          {coord.title}
        </button>
      )}

      <div className="text"><h4>{coord.title}</h4>{coord.description}</div>
    </Html>
  );
}
