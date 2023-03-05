import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/pages/home.css";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const heroAnim = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        let entry = entries[0];
      }
    });
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
