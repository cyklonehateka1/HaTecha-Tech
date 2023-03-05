import "../styles/components/hero.css";
import HeroCanvas from "./HeroCanvas";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroCont">
        <div className="heroLeft">
          <h4>TAKE YOUR BUSINESS TO THE NEXT LEVEL</h4>
          <h1>
            WITH US BY YOUR SIDE, HANDLING ALL YOUR SOFTWARE DEVELOPMENT NEEDS
          </h1>
          <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 10,
                typeSpeed: 20,
                strings: [
                  "custom websites tailored to your business needs.",
                  "mobile apps designed to engage and delight your users, no matter the platform.",
                  "turn your vision into reality with our expert software development team.",
                ],
                deleteSpeed: 10,
              }}
            />
          </h3>
          <button>LET'S CONNECT NOW</button>
        </div>
        <div className="heroRight">
          <HeroCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
