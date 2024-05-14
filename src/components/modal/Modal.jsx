import "./Modal.css";

import image1 from "../../assets/profiles/Slajd1.JPG";
import image2 from "../../assets/profiles/Slajd2.JPG";
import image3 from "../../assets/profiles/Slajd3.JPG";
import image4 from "../../assets/profiles/Slajd4.JPG";
import image5 from "../../assets/profiles/Slajd5.JPG";
import image6 from "../../assets/profiles/Slajd6.JPG";
import image7 from "../../assets/profiles/Slajd7.JPG";
import image8 from "../../assets/profiles/Slajd8.JPG";
import image9 from "../../assets/profiles/Slajd9.JPG";

import kafelek1 from "../../assets/tiles/kafelki-1.png";
import kafelek2 from "../../assets/tiles/kafelki-2.png";
import kafelek3 from "../../assets/tiles/kafelki-3.png";
import kafelek4 from "../../assets/tiles/kafelki-4.png";
import kafelek5 from "../../assets/tiles/kafelki-5.png";
import kafelek6 from "../../assets/tiles/kafelki-6.png";
import kafelek7 from "../../assets/tiles/kafelki-7.png";
import kafelek8 from "../../assets/tiles/kafelki-8.png";

const Modal = ({ offerType }) => {
  return (
    <div className="modal-window">
      <div className="modal-content">
        <img
          src="https://cdn-icons-png.flaticon.com/128/130/130882.png"
          alt="back-icon"
          className="back-icon"
          onClick={() => window.location.reload()}
        />

        {offerType === "lo" && (
          <div className="lo-element">
            <div className="lo-content">
              <div className="flip-cards">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image1}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek1} alt="lo-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image2}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek2} alt="lo-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image3}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek3} alt="lo-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image4}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek4} alt="lo-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image5}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek5} alt="lo-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          src={image6}
                          alt="lo-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek6} alt="lo-img" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lo-buttons">
                <a href="https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/Regulamin-rekrutacji-XILO-24_25-1.pdf" target="_blank" rel="noreferrer">
                  <button>Regulamin rekrutacji</button>
                </a>
              </div>
            </div>
          </div>
        )}

        {offerType === "tie" && (
          <div className="tie-element">
            <div className="tie-content">
              <div className="flip-cards">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={image7}
                        alt="tie-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek7} alt="tie-img" />
                    </div>
                  </div>
                </div>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={image8}
                        alt="tie-img"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img src={kafelek8} alt="tie-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tie-buttons">
              <a href="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/06/2021-informatyk.pdf" target="_blank" rel="noreferrer">
                <button>Plan dydaktyczny t. informatyk</button>
              </a>
              
              <a href="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/06/2021-programista.pdf" target="_blank" rel="noreferrer">
                <button>Plan dydaktyczny t. programista</button>
              </a>
              
              <a href="https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/Regulamin-rekrutacji-TIE-24_25-1.pdf" target="_blank" rel="noreferrer">
                <button>Regulamin rekrutacji</button>
              </a>
            </div>
          </div>
        )}

        {offerType === "sp" && (
          <div className="sp-element">
            <div className="sp-content">
              <img
                src={image9}
                alt="sp-img"
              />
            </div>

            <div className="sp-buttons">
              <a href="https://forms.office.com/pages/responsepage.aspx?id=3l6mzPSrwUWA3aEUFyyHdZbnhW24z6BFl3_BjIPfDiJUMjBDS0NWVEYyWlNPRlBKVFJDVjNEVzhSVS4u" target="_blank" rel="noreferrer">
                <button>Próbny egzamin z angielskiego</button>
              </a>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeV2r6z6SZE3WS5HZ3NzG4WjDcywoT_OOwtj2g_2R9RgMU8ZA/viewform" target="_blank" rel="noreferrer">
                <button>Wniosek do SP 311</button>
              </a>
              
              <a href="https://www.cyfroweszkoly.pl/wp-content/uploads/2024/02/REGULAMIN-NABORU-DO-SZKOLY-PODSTAWOWEJ-NR-311.pdf" target="_blank" rel="noreferrer">
                <button>Regulamin rekrutacji</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
