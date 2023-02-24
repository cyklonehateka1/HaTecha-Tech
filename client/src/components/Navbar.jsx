import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/components/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navCont">
        <div className="navLeft">
          <h2>
            <span>H</span>aTecha
          </h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
