import "../styles/components/testimonials.css";
import img1 from "../assets/images/hoody.png";
import img2 from "../assets/images/laydy_blue.png";
import img3 from "../assets/images/manwhitesuit.png";
import img4 from "../assets/images/woman.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonialsCont">
        <h3>We leave the testimonies to our happy clients and affliates</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus laboriosam non numquam esse odio blanditiis fugiat
          deserunt suscipit ut ex corporis repudiandae, nostrum vitae eos
          excepturi praesentium autem voluptatem quisquam.
        </p>
        <div className="clientsCont">
          <div className="">
            <div className="clientImageDetCont1">
              <div className="details">
                <h5>Eric Bosomtwe</h5>
                <p>Founder and CEO - iCreations Ghana</p>
              </div>
            </div>
            <div className="imgCont">
              <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
            </div>
          </div>
          <div className="">
            <div className="clientImageDetCont2">
              <div className="details">
                <h5>Isaac Amoah Mensah</h5>
                <p>Founder and Director - Maik Young Multimedia</p>
              </div>
            </div>
            <div className="imgCont">
              <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
            </div>
          </div>
          <div className="">
            <div className="clientImageDetCont3">
              <div className="details">
                <h5>Emmanuel Hateka</h5>
                <p>Software Engineer and Affiliate</p>
              </div>
            </div>
            <div className="imgCont">
              <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
            </div>
          </div>
          <div className="">
            <div className="clientImageDetCont4">
              <div className="details">
                <h5>Dominic Yamson</h5>
                <p>Founder and CEO of Group Paapa Yamson</p>
              </div>
            </div>
            <div className="imgCont">
              <img src="https://i.ibb.co/wd9fxVk/ecommerce-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
