import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/pages/home.css";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import { useEffect } from "react";
import "../styles/components/common.css";
const Home = () => {
  useEffect(() => {
    const aboutAnim = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        let entry = entries[0];

        if (entry.isIntersecting) {
          document.querySelector("#aboutLeft").classList.add("fadein-left");
          document.querySelector("#aboutRight").classList.add("fadein-right");
        }
      }
    });
    aboutAnim.observe(document.querySelector("#aboutLeft"));

    const servicesAnim = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        let entry = entries[0];

        if (entry.isIntersecting) {
          document.querySelector("#aboutLeft").classList.add("fadein-left");
        }
      }
    });
    aboutAnim.observe(document.querySelector("#aboutLeft"));

    return () => {
      aboutAnim.disconnect();
    };
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
