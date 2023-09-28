import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

function aboutRidere() {

    return (
        <div className=" container-fluid card3">
        <div className="row  justify-content-md-center card31 ">
          {/* <div className="col col-lg-4 col-md-11 col-sm-6 subcard3 text-align-left mt-4 "> */}
          <div className="col col-lg-4 col-md-11 col-sm-6 subcard3 text-align-left  ">
            <Slide direction="up" >
              <div className="myelementSec">
                <h1>Ride Easy with RIDERE - India's Ultimate Ride Services App</h1>

                <p className="semicard3">
                Welcome to RIDERE, where 10 Million riders trust us for their daily commute. We prioritize safety and affordability for intra-city travel. Why Ride with Us?
                </p>
                {/* <p> <a href="qw" className="cardbttn">Learn More </a></p> */}
              </div>
            </Slide>
          </div>

          <div className="col col-lg-5  col-md-3 col-sm-2 subcard31 ">
            <Zoom triggerOnce={true}>
              <div className="myelementSec">
                <video
                  className="semicard31"
                  src="./images/vid.mp4"
                  alt="dff"
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="100%"
                ></video>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    
    );
            }

export default aboutRidere;