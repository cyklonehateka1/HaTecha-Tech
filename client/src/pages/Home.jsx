import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/pages/home.css";
import Services from "../components/Services";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
