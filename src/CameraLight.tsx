import { PerspectiveCamera } from "@react-three/drei";

export function CameraLight() {
  return (
    <PerspectiveCamera fov={40} position={[0, 2, 4]} makeDefault>
      <directionalLight color={0xffffff} intensity={2} position={[0, 2, 4]} />
    </PerspectiveCamera>
  );
}
