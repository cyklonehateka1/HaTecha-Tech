import "../styles/components/services.css";
import business from "../assets/illustrations/business.svg";
import graphic from "../assets/illustrations/graphic.svg";
import it from "../assets/illustrations/it.svg";
import mobile from "../assets/illustrations/mobile.svg";
import uxui from "../assets/illustrations/uxui.svg";
import web from "../assets/illustrations/web.svg";
const Services = () => {
  return (
    <div className="services">
      <div className="servicesCont">
        <div className="left">
          <h4>Our Services</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio
            perferendis autem esse delectus ipsam molestiae similique,
            consequuntur sapiente magnam a eveniet mollitia facere, expedita
            tempore pariatur reiciendis sequi velit?
          </p>
        </div>
        <div className="right">
          <div className="web">
            <img src={web} alt="" />
            <h5>Websites and Web Application</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
          <div className="mobile">
            <img src={mobile} alt="" />
            <h5>Mobile Applications</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
          <div className="enterprise">
            <img src={business} alt="" />
            <h5>Enterprice Solutions Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
          <div className="it">
            <img src={it} alt="" />
            <h5>General IT Consultancy</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
          <div className="uxui">
            <img src={uxui} alt="" />
            <h5>UX and UI designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
          <div className="graphic">
            <img src={graphic} alt="" />
            <h5>Graphic Designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et alias ut amet dolores, rem repellat voluptas vitae libero
              beatae? Soluta fugiat voluptatibus ex dolores, animi
              exercitationem eveniet aut minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
