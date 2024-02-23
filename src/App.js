import React from "react";
import { Html } from "@react-three/drei"; // Import Html component
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import Moon from "./components/moon";

const LoadingScreen = () => {
  return (
    <group>
      <mesh position={[0, 0, -10]}>
        <meshBasicMaterial color="white" />
      </mesh>
      <Html position={[0, 0, -10]}>
        <div style={{ color: "white", textAlign: "center", fontSize: "25px" }}>
          Loading...
        </div>
      </Html>
    </group>
  );
};

function App() {
  return (
    <Canvas>
      <Suspense fallback={<LoadingScreen />}>
        <Earth />
        <Moon />
      </Suspense>
    </Canvas>
  );
}

export default App;
