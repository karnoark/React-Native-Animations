import type { Matrix4, Transforms3d } from "react-native-redash";
import { multiply4, processTransform3d } from "react-native-redash";

type Vector3 = readonly [number, number, number];

export const vec3 = (x: number, y: number, z: number): Vector3 => [x, y, z] as const;

export const transformOrigin3d = (
  origin: Vector3,
  transform: Transforms3d
): Transforms3d => {
  "worklet";
  return [
    { translateX: origin[0] },
    { translateY: origin[1] },
    { translateZ: origin[2] },
    ...transform,
    { translateX: -origin[0] },
    { translateY: -origin[1] },
    { translateZ: -origin[2] },
  ];
};

export const concat = (m: Matrix4, origin: Vector3, transform: Transforms3d) => {
  "worklet";
  return multiply4(m, processTransform3d(transformOrigin3d(origin, transform)));
};
