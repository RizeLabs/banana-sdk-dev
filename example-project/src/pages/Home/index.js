import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div
        className="dashboard-container-1"
      >
        <div
          className="inner-top-div"
        >
          <div>
            <span className="top-button-1">
              <span>India's no 1 platform to deposit crypto !!</span>
            </span>
            <div className="top-container-left-text">
              <h2>
                Stake and earn <br />
                Crypto
              </h2>
              <p>
                World's most secure staking platform
                <br />
                with 2FA enabled to secure
                <br />
                your txns
              </p>
              <Link to="/staking">
              <button> Stake 🚀 </button>
              </Link>
              {/* <Link to="/swap">
              <button className="swap-btn"> Swap 🔀</button>
              </Link> */}
            </div>
          </div>
          <div>
            <img src="/assets/images/cryptocurrency.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// $lpbgcolor: #020202;
