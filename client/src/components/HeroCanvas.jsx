import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "../styles/components/heroCanvas.css";
import Globe from "./Globe";
const HeroCanvas = () => {
  return (
    <div className="heroCanvas">
      <Canvas>
        <Stage>
          <Globe scale={[2, 2, 2]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
