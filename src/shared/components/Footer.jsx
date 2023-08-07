import React from "react";
import FooterImg from "../assets/FooterImg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="sectionWave">
        <svg
          className="wave"
          x="0px"
          y="0px"
          viewBox="0 0 1920 45"
          width="1920"
          height="45px"
          preserveAspectRatio="none"
        >
          <style type="text/css"></style>
          <path d="M1920,0c-82.8,0-108.8,44.4-192,44.4c-78.8,0-116.5-43.7-192-43.7c-77.1,0-115.9,44.4-192,44.4c-78.2,0-114.6-44.4-192-44.4c-78.4,0-115.3,44.4-192,44.4C883.1,45,841,0.6,768,0.6C691,0.6,652.8,45,576,45C502.4,45,461.9,0.6,385,0.6C306.5,0.6,267.9,45,191,45C115.1,45,78,0.6,0,0.6V45h1920V0z"></path>
        </svg>
      </div>
      <div className="footer-container">
        <div className="img-container">
          <FooterImg />
        </div>
        <div className="contact">
          <h3 className="contact-h3">Contact with us!</h3>
          <p className="contact-p">
            DoorDash doesn’t want everybody applying for a position and
            overloading their HR department. a here on the first page of the
            sign-up process. So if you don’t have a car or still haven’t turned
            18 yet, you know not to get your hopes up.
          </p>
          <i class="bx bxl-instagram contact-icon"></i>
          <i class="bx bxl-facebook contact-icon"></i>
          <i class="bx bxl-twitter contact-icon"></i>
          <i class="bx bxs-envelope contact-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
