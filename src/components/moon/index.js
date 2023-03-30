import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import MoonMap from "../../assets/textures/moon.jpg";

export default function Moon() {
  const [moonMap] = useLoader(TextureLoader, [MoonMap]);

  const moonRef = useRef();

  useFrame(({ clock }) => {
    moonRef.current.rotation.y += 0.001;
    moonRef.current.position.x = 2 * Math.cos(clock.getElapsedTime() * 0.1);
    moonRef.current.position.z = 2 * Math.sin(clock.getElapsedTime() * 0.1);
  });

  return (
    <>
      <mesh ref={moonRef} position={[1, 0, 1]}>
        <sphereGeometry args={[0.2, 40, 40]} />
        <meshStandardMaterial map={moonMap} />
      </mesh>
    </>
  );
}
