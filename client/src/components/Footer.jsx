import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerCont">
        <div className="left">
          <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            deleniti necessitatibus. Nam obcaecati sequi aperiam odit blanditiis
            porro omnis, vel ullam quaerat aut! Alias nesciunt quia omnis in
            harum adipisci?
          </p>
          <h5>Follow us</h5>
          <div className="icons">
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
