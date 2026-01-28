import { useState, useEffect } from "react";
import "./AI_DS.css";
import BottomNav from "../../components/BottomNav";

import ceBg from "/images/btech/CE_bg.jpg";
import ce1 from "/images/btech/CE1.jpg";
import ce2 from "/images/btech/CE2.jpg";
import ce3 from "/images/btech/CE3.jpg";

export default function ChemicalEngineering() {
  const [active, setActive] = useState("about");

  // Slider state
  const images = [ce1, ce2, ce3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aids-page"
      style={{
        backgroundImage: `url(${ceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>
      <h2 className="aids-title">
        Chemical Engineering
      </h2>

      {/* TOP BUTTONS */}
      <div className="aids-buttons">
        <button
          className={active === "about" ? "active" : ""}
          onClick={() => setActive("about")}
        >
          About
        </button>

        <button
          className={active === "infra" ? "active" : ""}
          onClick={() => setActive("infra")}
        >
          Infrastructure
        </button>

        <button
          className={active === "career" ? "active" : ""}
          onClick={() => setActive("career")}
        >
          Career Opportunities
        </button>

        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          Contact
        </button>
      </div>

      {/* CONTENT */}
      <div className="aids-content">

        {/* ABOUT */}
        {active === "about" && (
          <div className="content-box slide-up">
            <div className="about-paragraph fade-slide">
              <p>
                The Department of Chemical Engineering, established in 1993,
                offers the B.Tech. Chemical Engineering program and has been
                NBA accredited since 2004.
              </p>

              <p>
                The department provides strong academic and practical training
                through modern laboratories, an industry-oriented curriculum,
                and experienced faculty.
              </p>

              <p>
                Students gain exposure through projects, internships, industrial
                visits, workshops, and conferences, supported by professional
                bodies such as IIChE, IE(I), and ISTE.
              </p>

              <p>
                Graduates pursue successful careers in core industries, MNCs,
                research, teaching, entrepreneurship, and higher studies in
                India and abroad, with growing opportunities in energy,
                biotechnology, pharmaceuticals, and environmental engineering.
              </p>
            </div>
          </div>
        )}

        {/* INFRASTRUCTURE */}
        {active === "infra" && (
          <div className="infrastructure-section">
            <div className="content-box slide-up">
              <div className="slider-container">
                <button className="slider-btn left" onClick={prevSlide}>
                  ❮
                </button>

                <img
                  src={images[current]}
                  alt="Chemical Engineering Infrastructure"
                  className="slider-image"
                />

                <button className="slider-btn right" onClick={nextSlide}>
                  ❯
                </button>
              </div>

              <div className="slider-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={index === current ? "dot active" : "dot"}
                    onClick={() => setCurrent(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CAREER */}
        {active === "career" && (
          <div className="content-box slide-up">
            <div className="career-grid">
              {[
                { role: "Process Engineer", salary: "₹4 – 10+ LPA", icon: "⚙️" },
                { role: "Chemical Plant Engineer", salary: "₹5 – 12+ LPA", icon: "🏭" },
                { role: "Petrochemical Engineer", salary: "₹6 – 15+ LPA", icon: "🛢️" },

                { role: "Pharmaceutical Engineer", salary: "₹5 – 14+ LPA", icon: "💊" },
                { role: "Energy & Power Sector Engineer", salary: "₹6 – 18+ LPA", icon: "⚡" },
                { role: "Environmental Engineer", salary: "₹4 – 9+ LPA", icon: "🌱" },

                { role: "Quality & Safety Engineer", salary: "₹4 – 8+ LPA", icon: "🧯" },
                { role: "Research Scientist / R&D", salary: "₹7 – 20+ LPA", icon: "🔬" },
                { role: "Higher Studies & Entrepreneurship", salary: "Global Scope", icon: "🎓" },
              ].map((career, index) => (
                <div
                  className="career-card fade-slide"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={index}
                >
                  <div className="career-icon">{career.icon}</div>
                  <h4>{career.role}</h4>
                  <p>{career.salary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <div className="content-box slide-up">
            <h3>Contact</h3>
            <p>
              Department of Chemical Engineering<br />
              Adhiyamaan College of Engineering<br />
              Email: chemical@adhiyamaan.ac.in
            </p>
          </div>
        )}

      </div>
      <BottomNav />
    </div>
  );
}
