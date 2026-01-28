import { useState, useEffect } from "react";
import "./AI_DS.css";
import BottomNav from "../../components/BottomNav";

import aidsBg from "/images/btech/AIDS_BG.jpg";
import aids1 from "/images/btech/AIDS_1.jpg";
import aids2 from "/images/btech/AIDS_2.jpg";
import aids3 from "/images/btech/AIDS_3.jpg";

export default function AI_DS() {
  const [active, setActive] = useState("about");

  // Slider state
  const images = [aids1, aids2, aids3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
        backgroundImage: `url(${aidsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="aids-title">
        Artificial Intelligence & Data Science
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
                The Department of Artificial Intelligence and Data Science (AI & DS) at
                ACE, established in 2023, offers a 4-year B.Tech program with an intake of
                120 students. The department focuses on developing skills in Artificial
                Intelligence, Machine Learning, Data Analytics, and Statistics to solve
                real-world problems.
              </p>
              <p>
                The curriculum is designed to provide a strong foundation in AI and Data
                Science concepts, along with practical applications in various domains
                such as healthcare, finance, marketing, and more.
              </p>
              <p>
                With an industry-oriented curriculum, experienced faculty, and modern
                infrastructure, students gain strong hands-on experience through
                projects, internships, and real-world applications.
              </p>
              <p>
                The department encourages research, innovation, entrepreneurship, and
                overall personality development, preparing students for successful
                careers and higher studies in AI-driven fields.
              </p>
            </div>
          </div>
        )}

        {/* INFRASTRUCTURE WITH SLIDER */}
        {active === "infra" && (
          <div className="infrastructure-section">
            <div className="content-box slide-up">
              <div className="slider-container">
                <button className="slider-btn left" onClick={prevSlide}>
                  ❮
                </button>

                <img
                  src={images[current]}
                  alt="AI & DS Infrastructure"
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
                { role: "AI Engineer", salary: "₹6 – 15+ LPA", icon: "🤖" },
                { role: "Data Scientist", salary: "₹6 – 18+ LPA", icon: "📊" },
                { role: "Machine Learning Engineer", salary: "₹7 – 20+ LPA", icon: "🧠" },
                { role: "Data Analyst", salary: "₹4 – 10+ LPA", icon: "📈" },
                { role: "Business Intelligence Analyst", salary: "₹5 – 12+ LPA", icon: "📉" },
                { role: "Big Data Engineer", salary: "₹8 – 22+ LPA", icon: "🗄️" },
                { role: "AI Research Scientist", salary: "₹8 – 25+ LPA", icon: "🔬" },
                { role: "Computer Vision Engineer", salary: "₹7 – 18+ LPA", icon: "👁️" },
                { role: "NLP Engineer", salary: "₹6 – 17+ LPA", icon: "💬" },
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
              Department of AI & DS<br />
              Adhiyamaan College of Engineering<br />
              Email: aids@adhiyamaan.ac.in
            </p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
