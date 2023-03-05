import "../styles/components/hero.css";
import HeroCanvas from "./HeroCanvas";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroCont">
        <div className="heroLeft">
          <h1>
            Take you business to the globe with innovative technology solutions
          </h1>
          <p>
            Expand Your Reach and Accelerate Your Growth with Our Innovative
            Technology Solutions. HaTecha specializes in developing custom
            websites, web applications, and mobile apps to help businesses like
            yours succeed in the global market. We also offer enterprise
            solutions development and general IT consultancy to optimize your
            business processes and enhance your performance.
          </p>
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
