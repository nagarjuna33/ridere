import React from "react";
import "./MyNavbar.css";
import logoridere from "./Images/logoridere.png";
import way2ride from "./Images/Name _clipdrop-background-removal.png";

import { Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";

function MyNavbar() {
  return (
    <header data-bs-theme="light">
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <div className="container">
          <Slide direction="left" triggerOnce>
            <ScrollLink to="background-section" spy={true} smooth={true} offset={-70} duration={100}>
              <div className="navbar-brand">
                <img
                  className="iconlogopng"
                  src={logoridere}
                  alt="Logo Ridere"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  className="textlogopng"
                  src={way2ride}
                  alt="Way2Ride"
                  style={{ width: "170px", height: "45px" }}
                />
              </div>
            </ScrollLink>
          </Slide>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
                <ScrollLink
                  to="background-section" // Use the same ID as your BackgroundSection
                  spy={true}
                  smooth={true}
                  offset={-70} // You might need to adjust this offset
                  duration={100}
                  className="nav-link active mx-2 link-with-underline"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="about-section" // Use the same ID as your BackgroundSection
                  spy={true}
                  smooth={true}
                  offset={-70} // You might need to adjust this offset
                  duration={100}
                  className="nav-link active mx-2 link-with-underline"
                >
                  About
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="video-section" // Use the same ID as your Videocomponent
                  spy={true}
                  smooth={true}
                  offset={-70} // You might need to adjust this offset
                  duration={100}
                  className="nav-link active mx-2 link-with-underline"
                >
                  Services
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="footer-section" // Use the same ID as your Footer
                  spy={true}
                  smooth={true}
                  offset={-70} // You might need to adjust this offset
                  duration={100}
                  className="nav-link active mx-2 link-with-underline"
                >
                  Contact
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="faq-section" // Use the same ID as your FAQApp section
                  spy={true}
                  smooth={true}
                  offset={-70} // You might need to adjust this offset
                  duration={100}
                  className="nav-link active mx-2 link-with-underline"
                >
                  FAQs
                </ScrollLink>
              </li>
            </ul>
            <a
              className="btn btn-dark signupBtn"
              href="https://play.google.com/store"
              target="_blank" // Opens the link in a new tab/window
              rel="noopener noreferrer" // Recommended for security
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyNavbar;
