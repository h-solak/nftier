import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CreativitySVG from "./assets/illustrations/creativity2.svg";
import { FaEthereum } from "react-icons/fa";
import Fade from "react-reveal/Fade";
function App() {
  //FADE HATA ÇIKARTIYOR, BASKA Bİ LİBRARY DENE
  return (
    <>
      <div className="xl-nav">
        <Navbar />
      </div>

      <div className="section-container" dir="ltr">
        <section id="page-1" className="flex-align flex-center">
          <div className="intro flex-align gap-4 fade-in">
            <Fade right>
              <img
                src={CreativitySVG}
                className="illustration"
                alt="creativity illustration"
              />
            </Fade>
            <Fade left>
              <div className="intro-right flex flex-column gap-8">
                <span>
                  USE YOUR ART, <br /> MAKE THE MONEY YOU DESERVE!
                </span>
                <a href="/" className="trade-btn flex-align flex-center gap-4">
                  TRADE
                  <FaEthereum />
                </a>
              </div>
            </Fade>
          </div>
        </section>
        <section id="page-2"></section>
        <section id="page-3"></section>
      </div>
    </>
  );
}

export default App;
