import "../styles/components/hero.css";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroCont">
        <div className="heroLeft">
          <h4>TAKE YOUR BUSINESS TO THE NEXT LEVEL</h4>
          <h1>
            WITH US BY YOUR SIDE, HANDLING ALL YOUR SOFTWARE DEVELOPMENT NEEDS
          </h1>
          <p></p>
          <button>LET'S CONNECT NOW</button>
        </div>
        <div className="heroRight">
          <Canvas>
            <mesh></mesh>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
