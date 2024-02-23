import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import Moon from "./components/moon";
import LoadingScreen from "./components/loading";

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
