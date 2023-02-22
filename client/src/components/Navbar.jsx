import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-5 px-7 flex justify-between border-black border">
      <div className="flex w-3/5 justify-between border-red-700 border ">
        <img
          src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png"
          alt=""
          className="w-20"
        />
        <ul className="flex">
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
    </div>
  );
};

export default Navbar;
