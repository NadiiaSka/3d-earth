import React from "react";
import { Html } from "@react-three/drei"; // Import Html component

const LoadingScreen = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <meshBasicMaterial color="white" />
      </mesh>
      <Html position={[0, 0, 0]} transform>
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "25px",
            margin: "0 auto",
          }}
        >
          Loading...
        </div>
      </Html>
    </group>
  );
};

export default LoadingScreen;
