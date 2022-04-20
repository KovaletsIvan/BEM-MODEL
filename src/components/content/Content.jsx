import React from "react";

import "./content.scss";
import img1 from "./images/screen1.png";
import img2 from "./images/screen2.png";
import img3 from "./images/screen3.png";
import img4 from "./images/screen4.png";
import chaticon from "./images/chat-icon.png";

const Content = () => {
  return (
    <>
      <div className="content">
        <h2 className="content-title">Referenzen</h2>
        <p className="content-description">
          Von unseren Designern gestaltet, von unseren Entwicklern programmiert,
          von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum
          Festpreis.
        </p>
        <main className="container">
          <section className="section-info">
            <div className="info__image info__image-right">
              <img className="info-image" src={img1} alt="img" />
              <div className="image-name">Webdesign Agentur</div>
            </div>
            <div className="info__text info__text-right">
              <div className="title">Webdesign Agentur</div>
              <div className="text">
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
                Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </div>
            </div>
          </section>
          <section className="section-info">
            <div className="info__text info__text-left">
              <div className="title">Webdesign Agentur</div>
              <div className="text">
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
                Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </div>
            </div>
            <div className="info__image info__image-left">
              <img className="info-image" src={img2} alt="img" />
              <div className="image-name">Webdesign Agentur</div>
            </div>
          </section>
          <section className="section-info">
            <div className="info__image info__image-right">
              <img className="info-image" src={img3} alt="img" />
              <div className="image-name">Webdesign Agentur</div>
            </div>
            <div className="info__text info__text-right">
              <div className="title">Webdesign Agentur</div>
              <div className="text">
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
                Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </div>
            </div>
          </section>
          <section className="section-info">
            <div className="info__text info__text-left">
              <div className="title">Webdesign Agentur</div>
              <div className="text">
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
                Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </div>
            </div>
            <div className="info__image info__image-left">
              <img className="info-image" src={img4} alt="img" />
              <div className="image-name">Webdesign Agentur</div>
            </div>
          </section>
        </main>
      </div>
      <div className="chat">
        <img className="chat-icon" src={chaticon} alt="chat" />
      </div>
    </>
  );
};
export default Content;
