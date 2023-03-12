import { Products } from "../..";
import greetBg from "../../../assets/img/bg.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="greetBg">
      <div className="card text-bg-dark">
        <img src={greetBg} className="card-img" alt="Bcg" height={950} />
        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 cust">
              NEW SEASON ARRIVED{" "}
            </h5>
            <p className="card-text lead fs-2 cust">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
