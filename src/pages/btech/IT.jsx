import { useState, useEffect } from "react";
import "./AI_DS.css";
import BottomNav from "../../components/BottomNav";

import itBg from "/images/btech/ITbg.jpg";
import it1 from "/images/btech/IT1.jpg";
import it2 from "/images/btech/IT2.jpg";
import it3 from "/images/btech/IT3.jpg";

export default function IT() {
  const [active, setActive] = useState("about");

  // Slider state
  const images = [it1, it2, it3];
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
        backgroundImage: `url(${itBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>
      <h2 className="aids-title">
        Information Technology
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
                The Department of Information Technology, established in 2001,
                is a key academic unit of Adhiyamaan Educational Research
                Institutions (AERI), offering quality undergraduate education
                supported by robust infrastructure and modern computing
                facilities.
              </p>

              <p>
                The department follows a well-structured, industry- and
                society-oriented curriculum that enables students to acquire
                comprehensive knowledge in both core and emerging areas of
                Information Technology.
              </p>

              <p>
                With a dynamic team of qualified faculty specializing in
                Wireless Networks, Data Mining, Soft Computing, Cyber Security,
                Big Data Analytics, Cloud Computing, Image Processing, and
                Mobile Computing, the department promotes research, innovation,
                and socially relevant problem-solving.
              </p>

              <p>
                Students are supported through academic mentoring, value-added
                programs, and placement-oriented training, fostering technical
                competence, ethical values, leadership qualities, and lifelong
                learning skills. The department maintains a consistent placement
                record exceeding 80%, preparing graduates to meet real-world
                industry challenges effectively.
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
                  alt="IT Infrastructure"
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
                { role: "System Analyst", salary: "₹6 – 14+ LPA", icon: "🧠" },
                { role: "Cyber Security Analyst", salary: "₹6 – 16+ LPA", icon: "🔐" },

                { role: "Data Engineer", salary: "₹7 – 18+ LPA", icon: "📊" },
                { role: "Cloud Engineer", salary: "₹7 – 20+ LPA", icon: "☁️" },
                { role: "Network Engineer", salary: "₹4 – 10+ LPA", icon: "🌐" },

                { role: "IT Consultant", salary: "₹6 – 18+ LPA", icon: "📋" },
                { role: "Mobile App Developer", salary: "₹5 – 14+ LPA", icon: "📱" },
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
              Department of Information Technology<br />
              Adhiyamaan College of Engineering<br />
              Email: it@adhiyamaan.ac.in
            </p>
          </div>
        )}

      </div>
      <BottomNav />
    </div>
  );
}
