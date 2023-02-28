import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
  FaPhoneVolume,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerCont">
        <div className="left">
          <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
          <p>
            With our team being made up of top professionals in the industtry
            having worked on top projects for top companies, be rest assured
            that you're in safe hands.
          </p>
          <h5>Follow us</h5>
          <div className="icons">
            <Link to="https://www.twitter.com/hatecha2023" className="twitter">
              <FaTwitter />
            </Link>
            <Link to="#" className="ig">
              <FaInstagram />
            </Link>
            <Link to="#" className="linkedin">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="email">
            <p>
              <FaMailBulk />
            </p>
            <div>
              <a href="mailto:info@hatecha.tech">info@hatecha.tech</a>
              <span>Get in touch via email</span>
            </div>
          </div>
          <h4>Useful Links</h4>
          <hr />
          <div className="links">
            <div className="left">
              <Link to="#">Blog</Link>
              <Link to="#">Services</Link>
              <Link to="#">Contact Us</Link>
              <Link to="#">About Us</Link>
            </div>
            <div className="right">
              <Link to="#">Affiliates</Link>
              <Link to="#">Portfolio</Link>
              <Link to="#">Our Team</Link>
              <Link to="#">Testimonials</Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="tel">
            <p>
              <FaPhoneVolume />
            </p>
            <div>
              <a href="tel:+233-248-226-831">+233 248 226 831</a>
              <span>Give us a call</span>
            </div>
          </div>
          <h4>Subscribe</h4>
          <hr />
          <p>
            Enter your email to subscribe to our newsletter. You can unsubscribe
            anytime.
          </p>
          <form>
            <input type="email" placeholder="email" />
            <button>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
