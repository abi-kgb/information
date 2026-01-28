import { useState, useEffect } from "react";
import "./AI_DS.css"; // reuse same CSS
import BottomNav from "../../components/BottomNav";

import csbsBg from "/images/btech/csbsbg.jpg";
import csbs1 from "/images/btech/csbs1.jpg";
import csbs2 from "/images/btech/csbs2.jpg";

export default function CSBS() {
  const [active, setActive] = useState("about");

  // Slider state
  const images = [csbs1, csbs2];
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
    <div className="aids-page"
      style={{
        backgroundImage: `url(${csbsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "120vh",
      }}>
      <h2 className="aids-title">
        Computer Science and Business Systems (CSBS)
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
                The Department of Computer Science and Business Systems (CSBS),
                established in 2025, is committed to developing professionals
                who effectively integrate computing technologies with business
                practices.
              </p>

              <p>
                The department offers an industry-aligned curriculum covering
                software development, data analytics, enterprise systems,
                cloud computing, business intelligence, digital marketing,
                and IT management.
              </p>

              <p>
                Emphasis is placed on interdisciplinary learning, outcome-based
                education, innovation, and ethical practices to ensure holistic
                professional development.
              </p>

              <p>
                Graduates are prepared for roles in e-commerce, finance,
                consulting, supply chain management, and technology-driven
                enterprises, contributing to organizational growth and digital
                transformation in a global environment.
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
                  alt="CSBS Infrastructure"
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
                { role: "Software Engineer", salary: "₹5 – 15+ LPA", icon: "💻" },
                { role: "Business Analyst", salary: "₹6 – 14+ LPA", icon: "📊" },
                { role: "Data Analyst", salary: "₹5 – 12+ LPA", icon: "📈" },

                { role: "Cloud & DevOps Engineer", salary: "₹7 – 18+ LPA", icon: "☁️" },
                { role: "IT Consultant", salary: "₹6 – 16+ LPA", icon: "🧠" },
                { role: "Digital Marketing Analyst", salary: "₹4 – 10+ LPA", icon: "📢" },

                { role: "Product / Project Manager", salary: "₹8 – 20+ LPA", icon: "🗂️" },
                { role: "E-Commerce & FinTech Specialist", salary: "₹6 – 18+ LPA", icon: "💳" },
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
              Department of Computer Science and Business Systems<br />
              Adhiyamaan College of Engineering<br />
              Email: csbs@adhiyamaan.ac.in
            </p>
          </div>
        )}

      </div>
      <BottomNav />
    </div>
  );
}
