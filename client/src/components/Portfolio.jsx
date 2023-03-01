import ecommerce from "../assets/images/ecommerce1.png";
import erp from "../assets/images/dashboard.png";
import logigInterns from "../assets/images/logigInternsHome.png";
import "../styles/components/portfolio.css";
export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolioCont">
        <h5>We built these and more</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          excepturi magnam ipsam eaque facere? Blanditiis quia perferendis
          maxime laborum ea. Tempora repellendus nisi voluptas? Atque aliquid
          quam eum fugit enim.
        </p>
        <div className="portfolios">
          <div className="left">
            <a href="#">
              <img src={ecommerce} alt="" />
            </a>
            <h5>Ecommerce website for Shop Tech</h5>
          </div>
          <div className="right">
            <div className="top">
              <a href="#">
                <img src={erp} alt="" />
              </a>
              <h5>HaTecha Commerce Management (still in development)</h5>
            </div>
            <div className="bottom">
              <a href="#">
                <img src={logigInterns} alt="" />
              </a>
              <h5>Website for Logig Intership</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
