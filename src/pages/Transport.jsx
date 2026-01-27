import { useState } from "react";
import "./Transport.css";

const routes = [
  "AYYUR","BARGUR","HALESEEBAM","TIRUPATHUR","KAGADASAM",
  "ANCHETTY","LOCAL STAFF BUS","POONAPALLI","KAKNOOR",
  "RAYAKOTTAI","JAWALAGIRI","MUDAMPATTI","MATHUR",
  "KELAMANGALAM & GOWTHALAM","SEEKANAPALLI","BERIGAI",
  "ALSANATHAM","KRISHNAGIRI","MATHIGIRI","BASTHI",
  "ATHIPALLI","ASHOK LEYLAND","KARIYAMANGALAM"
];

const images = ["/images/t1.jpeg", "/images/t2.jpeg"];

export default function Transport() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="page">

      {/* BACKGROUND IMAGE — VIDEO REMOVED */}
      <img
        src="/images/transport.jpg"
        alt="background"
        className="bg-video"
      />

      {/* DARK OVERLAY */}
      <div className="overlay">

        {/* TITLE */}
        <h1 className="title">🚌 ACE TRANSPORT ROUTES</h1>

        {/* MAIN CONTENT */}
        <div className="content">

          {/* LEFT – ROUTES */}
          <div className="left-panel glass-light">
            <h2>Available Routes</h2>

            <div className="routes">
              {routes.map((route, i) => (
                <div
                  key={i}
                  className="route-item"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="dot"></span>
                  <span>{route}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – IMAGE SLIDER */}
          <div className="right-panel glass-dark">
            <button className="nav left" onClick={prev}>‹</button>

            <img
              src={images[index]}
              className="bus-image"
              alt="bus"
            />

            <button className="nav right" onClick={next}>›</button>
          </div>

        </div>

        {/* CONTACT */}
        <div className="contact glass-dark">
          <p>Transport Incharge</p>
          <h3>Mr. Govindaraj</h3>
          <p>📞 9442855079</p>
        </div>

      </div>
    </div>
  );
}
