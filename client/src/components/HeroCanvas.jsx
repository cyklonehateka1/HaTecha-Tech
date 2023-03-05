import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "../styles/components/heroCanvas.css";
import Globe from "./Globe";
const HeroCanvas = () => {
  return (
    <Canvas>
      <Stage>
        <Globe />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  );
};

export default HeroCanvas;
