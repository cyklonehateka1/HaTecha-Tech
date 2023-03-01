import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import "../styles/pages/home.css";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
