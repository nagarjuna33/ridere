import React from "react";
import "./BackgroundSection.css"; // Import your CSS file for styling this component
import taxiImage from "./Images/pngwing.com.png"; // Provide the correct path to your image
import { Slide } from "react-awesome-reveal";
import Herologo from "./Images/RIDERE WAY TO RIDE  SPACE TO PARK.png";

function BackgroundSection() {
  return (
    <section className="background-section">
      <div className="container">
      <Slide direction="right" triggerOnce>
        <div>
          <img src={Herologo} alt="Taxi Logo" className="HeroLogoImage" />
        </div>
      </Slide>
        {/* Your content for this section goes here */}
        <Slide direction="left" triggerOnce>
          {/* <h1 className="hcolor">
            RIDE<span className="tcolor">RE</span>
          </h1> */}
          {/* <h3 className="pcolor">WAY TO RIDE SPACE TO PARK</h3> */}
        </Slide>
      </div>
      <Slide direction="right" triggerOnce>
        <div>
          <img src={taxiImage} alt="Taxi Logo" className="backgroundimage" />
        </div>
      </Slide>
    </section>
  );
}

export default BackgroundSection;
