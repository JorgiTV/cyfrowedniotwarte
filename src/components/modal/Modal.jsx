import React, { useEffect, useState } from "react";
import "./Modal.css";

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
              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/lobch.jpg/"
                alt="lo-img"
              />

              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/loag.jpg/"
                alt="lo-img"
              />

              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/loprdzi.jpg/"
                alt="lo-img"
              />

              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/lobhum.jpg/"
                alt="lo-img"
              />

              <ul>
                <li>Profil politechniczny (mat-fiz-ang)</li>
                <li>Profil sportowy (ang-geo-siatkówka)</li>
              </ul>

              <div className="lo-buttons">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/Regulamin-rekrutacji-XILO-24_25-1.pdf")
                  }
                >
                  Regulamin rekrutacji
                </button>
              </div>
            </div>
          </div>
        )}

        {offerType === "tie" && (
          <div className="tie-element">
            <div className="tie-content">
              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/tinf.jpg"
                alt="tie-img"
              />

              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/tprog.jpg"
                alt="tie-img"
              />
            </div>

            <div className="tie-buttons">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.cyfroweszkoly.pl/wp-content/uploads/2021/06/2021-informatyk.pdf")
                }
              >
                Plan dydaktyczny t. informatyk
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.cyfroweszkoly.pl/wp-content/uploads/2021/06/2021-programista.pdf")
                }
              >
                Plan dydaktyczny t. programista
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.cyfroweszkoly.pl/wp-content/uploads/2024/03/Regulamin-rekrutacji-TIE-24_25-1.pdf")
                }
              >
                Regulamin rekrutacji
              </button>
            </div>
          </div>
        )}

        {offerType === "sp" && (
          <div className="sp-element">
            <div className="sp-content">
              <img
                src="https://www.cyfroweszkoly.pl/wp-content/uploads/2021/02/sp.jpg"
                alt="sp-img"
              />
            </div>

            <div className="sp-buttons">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://forms.office.com/pages/responsepage.aspx?id=3l6mzPSrwUWA3aEUFyyHdZbnhW24z6BFl3_BjIPfDiJUMjBDS0NWVEYyWlNPRlBKVFJDVjNEVzhSVS4u")
                }
              >
                Próbny egzamin z angielskiego
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSeV2r6z6SZE3WS5HZ3NzG4WjDcywoT_OOwtj2g_2R9RgMU8ZA/viewform")
                }
              >
                Wniosek do SP 311
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.cyfroweszkoly.pl/wp-content/uploads/2024/02/REGULAMIN-NABORU-DO-SZKOLY-PODSTAWOWEJ-NR-311.pdf")
                }
              >
                Regulamin rekrutacji
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
