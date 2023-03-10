import "../styles/components/about.css";
import "../styles/components/aboutResponsiveness.css";
import security from "../assets/illustrations/security.svg";
import code from "../assets/illustrations/code.svg";
import speed from "../assets/illustrations/speed.svg";
import team from "../assets/illustrations/team.svg";
import experience from "../assets/illustrations/experience.svg";
import ux from "../assets/illustrations/ux.svg";
import honesty from "../assets/illustrations/honesty.svg";
import solution from "../assets/illustrations/solution.svg";
import dedication from "../assets/illustrations/dedication.svg";
import { useEffect } from "react";

const About = () => {
  return (
    <div className="about">
      <div className="aboutCont">
        <h5>About Us</h5>
        <div>
          <div className="left aboutLeft" id="aboutLeft">
            <h5>Reasons why we might be the best fit for you.</h5>
            <div>
              <div className="security">
                <img src={security} alt="" />
                <span>Security</span>
              </div>
              <div className="technology">
                <img src={code} alt="" />
                <span>Latest Technology</span>
              </div>
              <div className="experience">
                <img src={experience} alt="" />
                <span>Experience</span>
              </div>
              <div className="speed">
                <img src={speed} alt="" />
                <span>Fast</span>
              </div>
              <div className="teamWork">
                <img src={team} alt="" />
                <span>Team Work</span>
              </div>
              <div className="ui">
                <img src={ux} alt="" />
                <span>Best UI/UX</span>
              </div>
            </div>
          </div>
          <div className="right" id="aboutRight">
            <h2>We are a team of industry leading software engineers</h2>
            <p className="teamP">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              minus quia accusamus iusto necessitatibus velit earum rem libero
              illum mollitia, aspernatur quam. Modi quisquam sapiente
              reprehenderit ex nam. Ipsa, autem?
            </p>
            <h4> Our Values</h4>
            <p className="valuesP">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique debitis exercitationem ea quo labore, dolor earum, neque
              dolorum sapiente dicta quod voluptatem sed temporibus nostrum
              necessitatibus tempora reiciendis natus deleniti?
            </p>
            <div>
              <div>
                <img src={honesty} alt="" />
                <h5>INTEGRITY & HONESTY</h5>
              </div>
              <div>
                <img src={solution} alt="" />
                <h5>SOLUTION DRIVEN</h5>
              </div>
              <div>
                <img src={dedication} alt="" />
                <h5>LOVE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
