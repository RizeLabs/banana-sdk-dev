import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div
        className="dashboard-container-1"
      >
        <a href="whatsapp://send?text=Check%20out%20this%20image:&amp;image=https://banana-shards-qr-img.s3.us-east-1.amazonaws.com/img_0e09dce4-e84c-4d82-94d2-14bb4bbfe8f9" data-action="share/whatsapp/share">Share on WhatsApp</a>
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
