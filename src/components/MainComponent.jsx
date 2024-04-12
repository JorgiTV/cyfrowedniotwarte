import React, { useState } from "react";
import Modal from "./modal/Modal";

import backgroundCoverUp from "../assets/background-cover-up.svg";
import backgroundCoverDown from "../assets/background-cover-down.svg";
import studentsImage from "../assets/students-image.svg";
import schoolLogo from "../assets/duzeloga.png";

import logoLo from "../assets/logo-lo.png";
import logoTie from "../assets/logo-tie.png";
import logoSp from "../assets/logo-sp.png";

import logoTwitch from "../assets/socialmedia/twitch.svg";
import logoInstagram from "../assets/socialmedia/instagram.svg";
import logoTiktok from "../assets/socialmedia/tiktok.svg";

import "./MainStyle.css";
import "./MainStyleResponsive.css";

const MainComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [offerType, setOfferType] = useState("");

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const handleOfferClick = (type) => {
    setShowModal(true);
    setOfferType(type);
  };

  return (
    <div className="main-page">
      {showModal && (
        <Modal offerType={offerType} onClose={() => setShowModal(false)} />
      )}
      <div className="main-page-backgrounds">
        <img
          src={backgroundCoverUp}
          alt="background-cover-up"
          className="main-page-background-up"
        />
        <img
          src={backgroundCoverDown}
          alt="background-cover-down"
          className="main-page-background-down"
        />
      </div>

      <div className="main-page-content">
        {!(width <= 600) ? (
          <div className="main-page-computer">
            <div className="main-page-left">
              <div className="main-page-students">
                <img src={studentsImage} alt="students" />
              </div>
            </div>

            <div className="main-page-right">
              <div className="main-page-right-content">
                <div className="main-page-logo">
                  <img src={schoolLogo} alt="school-logo" />
                </div>

                <div className="main-page-buttons-rec">
                  <div
                    className="main-page-button"
                    onClick={() => handleOfferClick("lo")}
                  >
                    <img src={logoLo} alt="logo-lo" />
                    <p>Oferta LO XI</p>
                  </div>

                  <div
                    className="main-page-button"
                    onClick={() => handleOfferClick("tie")}
                  >
                    <img src={logoTie} alt="logo-tie" />
                    <p>Oferta TIE 9</p>
                  </div>

                  <div
                    className="main-page-button"
                    onClick={() => handleOfferClick("sp")}
                  >
                    <img src={logoSp} alt="logo-sp" />
                    <p>Oferta SP 311</p>
                  </div>

                  <div className="main-page-information">
                    <h3>Zobacz również:</h3>
                    <p
                      onClick={() =>
                        (window.location.href = "https://cyfroweszkoly.pl")
                      }
                    >
                      Strona szkoły
                    </p>
                    <p
                      onClick={() =>
                        (window.location.href =
                          "https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/oferta-XILO-TIE9.pdf")
                      }
                    >
                      Prezentacja multimedialna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-page-mobile">
            <div className="main-page-logo">
              <img src={schoolLogo} alt="school-logo" />
            </div>

            <div className="main-page-students">
              <img src={studentsImage} alt="students" />
            </div>

            <div className="main-page-buttons-rec">
              <div
                className="main-page-button"
                onClick={() => handleOfferClick("lo")}
              >
                <img src={logoLo} alt="logo-lo" />
                <p>Oferta LO XI</p>
              </div>

              <div
                className="main-page-button"
                onClick={() => handleOfferClick("tie")}
              >
                <img src={logoTie} alt="logo-tie" />
                <p>Oferta TIE 9</p>
              </div>

              <div
                className="main-page-button"
                onClick={() => handleOfferClick("sp")}
              >
                <img src={logoSp} alt="logo-sp" />
                <p>Oferta SP 311</p>
              </div>

              <div className="main-page-information">
                <h3>Zobacz również:</h3>
                <p
                  onClick={() =>
                    (window.location.href = "https://cyfroweszkoly.pl")
                  }
                >
                  Strona szkoły
                </p>
                <p
                  onClick={() =>
                    (window.location.href =
                      "https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/oferta-XILO-TIE9.pdf")
                  }
                >
                  Prezentacja multimedialna
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="main-page-footer">
        <div className="main-page-footer-content">
          <img
            src={logoTwitch}
            alt="twitch"
            onClick={() =>
              (window.location.href = "https://www.twitch.tv/tie9olsztyn")
            }
          />
          <img
            src={logoInstagram}
            alt="instagram"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/cyfroweszkoly/")
            }
          />
          <img
            src={logoTiktok}
            alt="tiktok"
            onClick={() =>
              (window.location.href =
                "https://www.tiktok.com/@lo11_tie9_olsztyn")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
