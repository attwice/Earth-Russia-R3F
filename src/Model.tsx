import { useGLTF } from '@react-three/drei'

export function Model() {
  const gltf = useGLTF('/earth.glb')
  return <primitive wireframe object={gltf.scene} />
}
