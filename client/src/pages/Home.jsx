import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/pages/home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
