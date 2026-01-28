import { useState, useEffect } from "react";
import "./AI_DS.css";
import BottomNav from "../../components/BottomNav";

import bio1 from "/images/btech/biotech_1.jpg";
import bio2 from "/images/btech/biotech_2.jpg";
import bioBg from "/images/btech/biobg.jpg";


export default function Biotechnology() {
  const [active, setActive] = useState("about");

  // Slider state
  const images = [bio1, bio2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="aids-page"
      style={{
        backgroundImage: `url(${bioBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="aids-title">
        Biotechnology
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
                The Department of Biotechnology offers a comprehensive
                undergraduate program focused on applying biological systems
                and organisms to develop products and technologies that improve
                human life.
              </p>

              <p>
                The curriculum integrates biology, chemistry, genetics,
                molecular biology, and bioinformatics with strong laboratory
                exposure.
              </p>

              <p>
                Students are trained to meet industry and research demands
                through hands-on experiments, internships, and project-based
                learning.
              </p>

              <p>
                The department promotes innovation, ethical practices, and
                interdisciplinary research in healthcare, agriculture, and
                environmental biotechnology.
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
                  alt="Biotechnology Infrastructure"
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
                { role: "Biotechnologist", salary: "₹4 – 10+ LPA", icon: "🧬" },
                { role: "Clinical Research Associate", salary: "₹5 – 12+ LPA", icon: "🏥" },
                { role: "Quality Control Analyst", salary: "₹4 – 8+ LPA", icon: "🧪" },

                { role: "Biomedical Scientist", salary: "₹6 – 15+ LPA", icon: "🔬" },
                { role: "Regulatory Affairs Officer", salary: "₹5 – 14+ LPA", icon: "📜" },
                { role: "Bioinformatics Analyst", salary: "₹6 – 18+ LPA", icon: "💻" },

                { role: "Pharma Research Scientist", salary: "₹7 – 20+ LPA", icon: "💊" },
                { role: "Food & Agricultural Scientist", salary: "₹4 – 9+ LPA", icon: "🌾" },
                { role: "Higher Studies & Research", salary: "Global Scope", icon: "🎓" },
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
              Department of Biotechnology<br />
              Adhiyamaan College of Engineering<br />
              Email: biotech@adhiyamaan.ac.in
            </p>
          </div>
        )}

      </div>
      <BottomNav />
    </div>
  );
}
